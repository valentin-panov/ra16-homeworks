/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function Error({ baseURL }) {
  const [data, loading, error] = useJsonFetch(baseURL + 'error', {});
  return (
    <div style={{ color: 'red' }}>{error && <span>ERROR: {error}</span>}</div>
  );
}
