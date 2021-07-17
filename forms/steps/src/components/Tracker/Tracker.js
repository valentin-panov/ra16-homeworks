/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField/InputField';
import Sheet from './Sheet/Sheet';
import idGenetator from '../../utils/idGenetator';
import compare from '../../utils/compare';

const INITIAL_TRACKER_STATE = [
  { date: '20.07.2019', distance: '5.7', id: '0' },
  { date: '19.07.2019', distance: '14.2', id: '1' },
  { date: '18.07.2019', distance: '3.4', id: '2' },
];

function Tracker(props) {
  const [form, setForm] = useState(INITIAL_TRACKER_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const date = evt.target.date.value;
    const distance = evt.target.distance.value;
    const newForm = [...form];

    const index = newForm.findIndex((x) => x.date === date);
    if (index === -1) {
      newForm.push({ date: date, distance: distance, id: idGenetator() });
    } else {
      newForm[index].distance =
        Number.parseFloat(newForm[index].distance) +
        Number.parseFloat(distance);
    }

    newForm.sort(compare);

    setForm(newForm);
  };

  const handleChange = (evt) => {
    // console.log(evt.target);
  };

  const handleDelete = (evt) => {
    const id = evt.target.dataset.id;

    setForm(() => form.filter((item) => item.id !== id));
  };

  return (
    <div className='Tracker'>
      <InputField handleSubmit={handleSubmit} handleChange={handleChange} />
      <Sheet form={form} handleDelete={handleDelete} />
    </div>
  );
}

Tracker.propTypes = {};

export default Tracker;
