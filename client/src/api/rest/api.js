import axios from "axios";

export const apiRestImplementation = {
  getWeatherForecast: async () => {
    const response = await axios.get("/api/weatherforecast");
    return response.data;
  },
};
