import React from 'react';

export default function Details({ userInfo }) {
  if (!userInfo) return <></>;
  const { id, name, avatar, details } = userInfo;
  const { city, company, position } = details;
  return (
    <div className='container_details' data-id={id}>
      <img src={avatar} alt='avatar' />
      <span className='container_details-name'>{name}</span>
      <span>City: {city}</span>
      <span>Company: {company}</span>
      <span>Position: {position}</span>
    </div>
  );
}
