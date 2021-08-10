/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { green } from '@material-ui/core/colors';

function UpdateBtn({ onUpdateHandler }) {
  return (
    <div className='btn UpdateBtn' onClick={onUpdateHandler}>
      <AutorenewIcon style={{ color: green[500], fontSize: 20 }} />
    </div>
  );
}

UpdateBtn.propTypes = {};

export default UpdateBtn;
