/** SHOWS FORECAST */
import React from 'react';

function WeatherWidgetForecast({ props }) {
  return (
    <div className='WeatherWidgetForecast'>
      <span>{props.close}</span>
      <br />
      <span>{props.far}</span>
    </div>
  );
}

export default WeatherWidgetForecast;
