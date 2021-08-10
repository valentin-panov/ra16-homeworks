/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import UpdateBtn from './UpdateBtn/UpdateBtn';
import NewNote from './NewNote/NewNote';
import Note from './Note/Note';

function Container({
  notes,
  onDeleteHandler,
  onUpdateHandler,
  onSubmitHandler,
}) {
  return (
    <div className='Container'>
      <header className='Container_Header'>
        <h2 className='Container_title'>Notes</h2>
        <UpdateBtn onUpdateHandler={onUpdateHandler} />
      </header>
      <ul className='notes_container'>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDeleteHandler={onDeleteHandler} />
        ))}
      </ul>
      <NewNote onSubmitHandler={onSubmitHandler} />
    </div>
  );
}

Container.propTypes = {};

export default Container;
