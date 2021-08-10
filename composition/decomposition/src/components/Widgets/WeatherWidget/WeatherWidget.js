/** WEATHER WIDGET SHOWS WEATHER CONDITIONS */
import React from 'react';
import WidgetTitle from '../WidgetTitle/WidgetTitle';
import WeatherWidgetActual from './WeatherWidgetActual/WeatherWidgetActual';
import WeatherWidgetForecast from './WeatherWidgetForecast/WeatherWidgetForecast';

export default function WeatherWidget({ weather }) {
  return (
    <div className='WeatherWidget'>
      <WidgetTitle text={weather.title} />
      <WeatherWidgetActual props={weather.actual} />
      <WeatherWidgetForecast props={weather.forecast} />
    </div>
  );
}
