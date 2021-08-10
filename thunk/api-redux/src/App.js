import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createReq from './utils/createReq';
import ServiceEditor from './components/ServiceEditor';
import ServiceListViewer from './components/ServiceListViewer';

export default function App() {
  const items = useSelector((store) => store.serviceList.list);

  return (
    <div className='wrapper>'>
      <div className='container'>
        <ServiceEditor />
        {items.length > 0 && <ServiceListViewer />}
      </div>
    </div>
  );
}
