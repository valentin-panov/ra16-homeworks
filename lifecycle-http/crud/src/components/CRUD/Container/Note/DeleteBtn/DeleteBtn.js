/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { red } from '@material-ui/core/colors';

function DeleteBtn({ onDeleteHandler, note }) {
  return (
    <div className='btn DeleteBtn' onClick={() => onDeleteHandler(note.id)}>
      <CloseIcon style={{ color: red[500], fontSize: 20 }} />
    </div>
  );
}

DeleteBtn.propTypes = {};

export default DeleteBtn;
