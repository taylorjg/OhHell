import { useWeatherForecast } from "@app/hooks";
import { Version } from "@app/components";

export const App = () => {
  const { weatherForecastItems, isSuccess, isLoading, isError, error } =
    useWeatherForecast();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>ERROR: {error.message}</div>}
      {isSuccess && <pre>{JSON.stringify(weatherForecastItems, null, 2)}</pre>}
      <Version />
    </>
  );
};
