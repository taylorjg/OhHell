import { useQuery } from "@tanstack/react-query";

import { useApi } from "./use-api";

export const useWeatherForecast = () => {
  const api = useApi();

  const getWeatherForecastQuery = useQuery({
    queryKey: ["GetWeatherForecast"],
    queryFn: api.getWeatherForecast,
  });

  const { data: weatherForecastItems = [], ...rest } = getWeatherForecastQuery;

  return { weatherForecastItems, ...rest };
};
