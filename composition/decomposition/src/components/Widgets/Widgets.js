/** RENDERS WIDGET FIELD */
import React from 'react';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import MapWidget from './MapWidget/MapWidget';
import OnlineWidget from './OnlineWidget/OnlineWidget';
import PopularWidget from './PopularWidget/PopularWidget';
import TVSheetWidget from './TVSheetWidget/TVSheetWidget';

export default function Widgets(props) {
  const { weather, maps, online, popular, tvSheet } = props;
  // console.log(props);
  return (
    <div className='Widgets'>
      <WeatherWidget weather={weather} />
      <MapWidget maps={maps} />
      <OnlineWidget online={online} />
      <PopularWidget popular={popular} />
      <TVSheetWidget tvSheet={tvSheet} />
    </div>
  );
}
