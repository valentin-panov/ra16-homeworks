/** represents mistakes correction widget */
import React from 'react';
import WidgetTitle from '../WidgetTitle/WidgetTitle';
import WidgetSubTitle from '../WidgetSubTitle/WidgetSubTitle';

export default function ErrorWidget() {
  const pic = 'https://i1.wp.com/fb.ru/misc/i/gallery/99478/2870368.jpg';
  const title = 'Работа над ошибками';
  const subTitle = 'Смотрите на Яндексе и запоминайте';
  return (
    <div className='ErrorWidget'>
      <img src={pic} alt='err w' style={{ width: '100px' }} />
      <WidgetTitle text={title} />
      <WidgetSubTitle text={subTitle} />
    </div>
  );
}
