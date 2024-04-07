import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const weatherForecastItemPropType = PropTypes.shape({
  date: PropTypes.string.isRequired,
  temperatureC: PropTypes.number.isRequired,
  temperatureF: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
}).isRequired;

const WeatherForecastRow = ({ weatherForecastItem }) => {
  return (
    <TableRow>
      <TableCell>{weatherForecastItem.date}</TableCell>
      <TableCell>{weatherForecastItem.temperatureC}</TableCell>
      <TableCell>{weatherForecastItem.temperatureF}</TableCell>
      <TableCell>{weatherForecastItem.summary}</TableCell>
    </TableRow>
  );
};

WeatherForecastRow.propTypes = {
  weatherForecastItem: weatherForecastItemPropType,
};

export const WeatherForecastTable = ({ weatherForecastItems }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Temperature ({"\u2103"})</TableCell>
            <TableCell>Temperature ({"\u2109"})</TableCell>
            <TableCell>Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherForecastItems.map((weatherForecastItem, index) => (
            <WeatherForecastRow
              key={index}
              weatherForecastItem={weatherForecastItem}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

WeatherForecastTable.propTypes = {
  weatherForecastItems: PropTypes.arrayOf(weatherForecastItemPropType)
    .isRequired,
};
