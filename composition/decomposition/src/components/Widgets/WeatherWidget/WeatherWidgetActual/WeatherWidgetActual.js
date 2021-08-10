/** RENDER ACTUAL WEATHER  */
import React from 'react';

import WeatherWidgetActualTemp from './WeatherWidgetActualTemp/WeatherWidgetActualTemp';
import WeatherWidgetActualStatus from './WeatherWidgetActualStatus/WeatherWidgetActualStatus';

function WeatherWidgetActual({ props }) {
  return (
    <div className='WeatherWidgetActual'>
      <WeatherWidgetActualStatus status={props.status} />
      <WeatherWidgetActualTemp temp={props.temp} />
    </div>
  );
}

export default WeatherWidgetActual;
