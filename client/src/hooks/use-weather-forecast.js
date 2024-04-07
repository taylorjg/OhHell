import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getWeatherForecast = async () => {
  const response = await axios.get("/api/weatherforecast");
  return response.data;
};

export const useWeatherForecast = () => {
  const getWeatherForecastQuery = useQuery({
    queryKey: ["GetWeatherForecast"],
    queryFn: getWeatherForecast,
  });

  const { data: weatherForecastItems = [], ...rest } = getWeatherForecastQuery;

  return { weatherForecastItems, ...rest };
};
