import { useWeatherForecast } from "@app/hooks";

export const App = () => {
  const { weatherForecastItems, isLoading, isError, error } =
    useWeatherForecast();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>ERROR: {error.message}</div>;
  }

  return <pre>{JSON.stringify(weatherForecastItems, null, 2)}</pre>;
};
