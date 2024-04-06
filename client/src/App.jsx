import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getWeatherForecast = async () => {
  const response = await axios.get("/api/weatherforecast");
  return response.data;
};

export const App = () => {
  const [results, setResults] = useState([]);

  const getWeatherForecastQuery = useQuery({
    queryKey: ["GetWeatherForecast"],
    queryFn: getWeatherForecast
  });

  useEffect(() => {
    if (getWeatherForecastQuery.isSuccess) {
      setResults(getWeatherForecastQuery.data);
    }
  }, [getWeatherForecastQuery.isSuccess, getWeatherForecastQuery.data]);

  if (getWeatherForecastQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getWeatherForecastQuery.isError) {
    return <div>ERROR: {getWeatherForecastQuery.error.message}</div>;
  }

  return (
    <pre>{JSON.stringify(results, null, 2)}</pre>
  );
}
