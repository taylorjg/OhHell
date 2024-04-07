import { Grid } from "@mui/material";

import { useWeatherForecast } from "@app/hooks";
import { Version, WeatherForecastTable } from "@app/components";

export const App = () => {
  const { weatherForecastItems, isSuccess, isLoading, isError, error } =
    useWeatherForecast();

  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ mx: { xs: 2, md: "auto" } }}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>ERROR: {error.message}</div>}
        {isSuccess && (
          <WeatherForecastTable weatherForecastItems={weatherForecastItems} />
        )}
      </Grid>
      <Version />
    </Grid>
  );
};
