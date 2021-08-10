/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function Success({ baseURL }) {
  const [data, loading, error] = useJsonFetch(baseURL + 'data', {});
  return (
    <div style={{ color: 'green' }}>
      {data && <span>SUCCESS! Status: {data.status}</span>}
    </div>
  );
}
