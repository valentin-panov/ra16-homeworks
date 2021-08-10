import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function DateTimePrettier(Component) {
  function Wrapper(props) {
    const { date } = props;
    const prettyDate = moment(date).fromNow();
    return <Component {...props} date={prettyDate} />;
  }
  Wrapper.displayName = 'DateTimePrettier';
  return Wrapper;
}
