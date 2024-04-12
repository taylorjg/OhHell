export const apiLocalStorageImplementation = {
  getWeatherForecast: async () => {
    const string = localStorage.getItem("weatherforecast");
    return string ? JSON.parse(string) : [];
  },
};
