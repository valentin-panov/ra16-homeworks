/* eslint-disable no-unused-vars */
import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function Loading({ baseURL }) {
  const [data, loading, error] = useJsonFetch(baseURL + 'loading', {});
  return <div className='loading'>{loading && <span>LOADING...</span>}</div>;
}
