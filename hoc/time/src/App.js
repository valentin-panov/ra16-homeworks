/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { data } from './data/data';
import VideoList from './components/VideoList/VideoList';

export default function App() {
  const [list, setList] = useState(data);

  return <VideoList list={list} />;
}
