import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { edit, remove } from '../reducers/SliceServiceList';

export default function ServiceListViewer() {
  const dispatch = useDispatch();
  let items = useSelector((store) => store.serviceList.list);
  const filter = useSelector((store) => store.serviceList.filter);

  if (filter) {
    items = items
      .filter((item) => {
        return item.name.toLowerCase().includes(filter.name.toLowerCase());
      })
      .filter((item) => {
        return item.price.startsWith(filter.price);
      });
  }

  const onDeleteHandler = (id) => {
    dispatch(remove({ id }));
  };
  const onEditHandler = (id) => {
    dispatch(edit({ id }));
  };

  return (
    <>
      {items.length > 0 && (
        <ul className='card'>
          {items.map((item) => (
            <li className='card_item' key={item.id} dataid={item.id}>
              <span className='card_item-name'>{item.name}</span>
              <span className='card_item-price'>{item.price}</span>
              <EditIcon
                style={{
                  cursor: 'pointer',
                  border: 'black 1px solid',
                  marginLeft: '1vmin',
                }}
                onClick={() => onEditHandler(item.id)}
              />
              <CloseIcon
                style={{
                  cursor: 'pointer',
                  border: 'black 1px solid',
                  marginLeft: '1vmin',
                }}
                onClick={() => onDeleteHandler(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
