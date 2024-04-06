FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

COPY ./server .
COPY ./client/dist ./wwwroot
RUN dotnet restore
RUN dotnet publish --configuration Release --output /published --no-restore

# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# We are deploying to render.com which seems to want the Docker image to be built for a specific platform:
#   "The provided image URL points to an image with an invalid platform. Images must be built with the platform linux/amd64."
# I tried to build like this:
#   docker build --tag ohhell-amd64:v5 --platform=linux/amd64 .
# but it hangs at the "RUN dotnet restore" step.
# After some research, I found a workaround:
#   https://forums.docker.com/t/dotnet-restore-never-completes-on-m1-mac-when-targeting-linux-amd64-platform/132337/8
# I now build like this:
#   docker buildx build --force-rm --tag taylorjg/ohhell:v6 .
FROM mcr.microsoft.com/dotnet/aspnet:8.0-bookworm-slim-amd64

WORKDIR /app
COPY --from=build /published ./
EXPOSE 8080
ENTRYPOINT ["dotnet", "OhHell.dll"]
