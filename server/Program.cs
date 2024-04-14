using Microsoft.AspNetCore.HttpLogging;
using Microsoft.OpenApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddHttpLogging(logging =>
{
  logging.LoggingFields =
    HttpLoggingFields.Request |
    HttpLoggingFields.Response |
    HttpLoggingFields.Duration;
  logging.CombineLogs = true;
});

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpLogging();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// We are deploying to render.com which does its own https redirection (I think).
// app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

// For serving out the React Single Page Application (SPA).
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");

// Since we are deploying to render.com, we should run on the port specified by the PORT env var.
var port = Environment.GetEnvironmentVariable("PORT") ?? "5062";
var url = "http://*:" + port;

app.Run(url);
