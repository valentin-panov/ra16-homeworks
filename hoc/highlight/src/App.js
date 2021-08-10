/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { data } from './data/data';
import List from './components/List/List';

export default function App() {
  const [list, setList] = useState(data);

  return <List list={list} />;
}
