/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostBtn from './PostBtn/PostBtn';

function NewNote(props) {
  const [newNote, setNewNote] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newNote === '') {
      return;
    }
    props.onSubmitHandler(newNote);
    setNewNote('');
  };
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNewNote(value);
  };

  return (
    <form className='Note' onSubmit={onSubmitHandler}>
      <label htmlFor='NewNote' className='NewNote_label'>
        New note
      </label>
      <textarea
        className='textarea'
        id='NewNote'
        rows='3'
        name='NewNote'
        onChange={onChangeHandler}
        value={newNote}
      />
      <button type='submit' className='btn PostBtn'>
        <PostBtn />
      </button>
    </form>
  );
}

NewNote.propTypes = {};

export default NewNote;
