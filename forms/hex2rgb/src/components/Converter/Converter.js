import React from 'react';
import PropTypes from 'prop-types';

function Converter({ handleSubmit, handleHexChange, form, prefix }) {
  return (
    <div className='Converter'>
      <form onSubmit={handleSubmit}>
        <input
          className='ConverterInput'
          type='text'
          id='hexInput'
          name='hexInput'
          value={form.hex}
          ref={(target) => {
            try {
              target.value = prefix;
              target.focus();
            } catch (e) {}
          }}
          onChange={handleHexChange}
        />
        <label htmlFor='hexInput' className='ConverterRGB'>
          {form.rgb}
        </label>
      </form>
    </div>
  );
}

Converter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleHexChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
};

export default Converter;
