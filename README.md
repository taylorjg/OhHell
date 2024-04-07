# Description

_TODO_

# Running

## Client in dev mode, server running via "dotnet run"

You need two terminals - one to run the client dev server and one to run the webapi server.
API calls are proxied via the client dev server to the webapi server - there is some config related to this in vite.config.js.

```
npm run dev
```

```
PORT=5001 dotnet run --project server
```

Type "o" in the terminal running `npm run dev` to automatically open a web browser to the correct location which will probably be something like http://localhost:5173/.

## Client in dev mode, server running in Docker

You still need two terminals. One will run the client dev server exactly as above.

```
npm run dev
```

In order to run the webapi server in Docker, we first have to build a Docker image.
We use `build-for-deploy.sh` for this. We need to pass a version number.
Once the Docker image has been built, we need to run it inside a Docker container.
If we do not specify a particular port via the PORT environment variable, the webapi
server will run on port 8080 inside the Docker container. We map this to port 5001
on the host.

```
./build-for-deploy.sh v12
docker run --rm --publish 5001:8080 taylorjg/ohhell:v12
```

Type "o" in the terminal running `npm run dev` to automatically open a web browser to the correct location which will probably be something like http://localhost:5173/.

## Client and server running in Docker

```
./build-for-deploy.sh v12
docker run --rm --publish 5001:8080 taylorjg/ohhell:v12
```

Open http://localhost:5001/ in a web browser.

# Links

* https://ohhell.onrender.com/
