import { useQuery } from "@tanstack/react-query";

import { useApi } from "./use-api";

export const useWeatherForecast = () => {
  const apiImplementation = useApi();

  const getWeatherForecastQuery = useQuery({
    queryKey: ["GetWeatherForecast"],
    queryFn: apiImplementation.getWeatherForecast,
  });

  const { data: weatherForecastItems = [], ...rest } = getWeatherForecastQuery;

  return { weatherForecastItems, ...rest };
};
