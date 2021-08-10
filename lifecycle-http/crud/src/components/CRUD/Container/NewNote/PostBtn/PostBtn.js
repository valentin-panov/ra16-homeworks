/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import { grey } from '@material-ui/core/colors';

function PostBtn({ onSubmitHandler }) {
  return (
    <div className='btn'>
      <SendIcon style={{ color: grey[900], fontSize: 20 }} />
    </div>
  );
}

PostBtn.propTypes = {};

export default PostBtn;
