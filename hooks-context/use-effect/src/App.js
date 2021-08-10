import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';
import Loading from './components/Loading/Loading';

const baseURL =
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

export default function App() {
  const [list, setList] = useState([]);
  const [userID, setUserID] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(baseURL + 'users.json')
      .then((response) => response.json())
      .then((data) => setList((prevState) => [...prevState, ...data]))
      .then(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!userID) {
      return;
    }
    setLoading(true);
    fetch(`${baseURL}${userID}.json`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo((prevState) => ({ ...prevState, ...data }));
      })
      .then(() => {
        setLoading(false);
      });
  }, [userID]);

  const getUserIdHandler = (id) => {
    setList((prevState) => {
      const newState = prevState.map((item) => {
        item.id === id ? (item.active = true) : (item.active = false);
        return item;
      });
      return newState;
    });
    setUserID(id);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container_column'>
          {loading && !list.length && <Loading />}
          {list.length && (
            <List list={list} getUserIdHandler={getUserIdHandler} />
          )}
        </div>
        <div className='container_column'>
          {userID && loading && <Loading />}
          {!loading && userInfo && <Details userInfo={userInfo} />}
        </div>
      </div>
    </div>
  );
}
