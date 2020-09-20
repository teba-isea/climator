import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types"

const Weather = ({ weatherData }) => {
  const [error, setError] = useState(false);
  if (weatherData.cod === 404) setError(true);
  if (!weatherData.name) return null;

  const kelvin = 273.15;
  const name = weatherData.name;
  const medTemp = parseFloat(weatherData.main.temp - kelvin).toFixed(2);
  const maxTemp = parseFloat(weatherData.main.temp_max - kelvin).toFixed(2);
  const minTemp = parseFloat(weatherData.main.temp_min - kelvin).toFixed(2);

  return (
    <div className="card-panel white col s12">
      {error ? (
        <Error message={"City not Found"} />
      ) : (
        <div className="black-text center-align">
          <h5>the weather of {name} is</h5>
          <div className="container">
            <h3>
              {medTemp} <strong>&#8451;</strong>
            </h3>
          </div>
          <p>
            Max temperature: {maxTemp}
            <span>&#8451;</span>
          </p>
          <p>
            Min temperature: {minTemp}
            <span>&#8451;</span>
          </p>
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  WeatherData: PropTypes.object
}

export default Weather;