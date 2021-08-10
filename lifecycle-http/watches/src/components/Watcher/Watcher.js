/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import genID from '../../utils/genID';
import InputField from '../InputField/InputField';
import WatchField from './WatchField/WatchField';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const WATCH_INITIAL_STATE = [
  { name: 'Местное время', timeZone: moment().utcOffset(), id: '0' },
  {
    name: 'Берлин, Германия',
    timeZone: +120,
    id: '1',
  },
  { name: 'Абу-Даби, ОАЭ', timeZone: +240, id: '2' },
];

function Watcher() {
  const [watch, setWatch] = useState(WATCH_INITIAL_STATE);

  const inputData = [
    {
      inputName: 'name',
      inputLabel: 'Название',
      inputType: 'text',
      placeholder: 'Введите город',
      id: genID(),
    },
    {
      inputName: 'timeZone',
      inputLabel: 'Временная зона',
      inputType: 'number',
      placeholder: 'GMT',
      id: genID(),
    },
  ];
  const btnText = 'Добавить';

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // validation logic should be here?
    // console.log({ name, value });
    // setWatch((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { name, timeZone } = event.target;
    setWatch((prevWatch) => [
      ...prevWatch,
      {
        name: name.value,
        timeZone: timeZone.value * 60,
        id: genID(),
      },
    ]);
  };

  const onClickHandler = (event) => {
    const removeId = event.target.dataset.id;
    const newWatch = watch.filter((el) => el.id !== removeId);
    setWatch(newWatch);
  };

  return (
    <div className='Watcher'>
      <InputField
        inputData={inputData}
        btnText={btnText}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <WatchField watch={watch} onClickHandler={onClickHandler} />
    </div>
  );
}

Watcher.propTypes = {};

export default Watcher;
