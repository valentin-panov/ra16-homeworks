/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn/DeleteBtn';

function Note({ note, onDeleteHandler }) {
  return (
    <li className='Note'>
      {note.content}
      <DeleteBtn note={note} onDeleteHandler={onDeleteHandler} />
    </li>
  );
}

Note.propTypes = {};

export default Note;
