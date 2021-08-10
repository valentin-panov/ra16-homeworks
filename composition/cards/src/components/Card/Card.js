/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ImageCap from './ImageCap/ImageCap';
import Title from './Title/Title';
import Description from './Description/Description';
import BtnAction from './BtnAction/BtnAction';
import CardBody from './CardBody/CardBody';

function Card({ imgSrc, alt, title, text, actionLink, actionCall }) {
  return (
    <div className='Card'>
      {imgSrc ? <ImageCap imgSrc={imgSrc} alt={alt} /> : null}
      <CardBody>
        <Title title={title} />
        <Description text={text} />
        <BtnAction actionLink={actionLink} actionCall={actionCall} />
      </CardBody>
    </div>
  );
}

Card.propTypes = {};

export default Card;
