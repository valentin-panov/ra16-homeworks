/** RENDERS EVERY ITEM OF THE ONLINE WIDGET */
import React from 'react';

export default function OnlineWidgetItem({ item }) {
  const { name, channel } = item;
  return (
    <li>
      <img alt='play-icon' />
      <span>&nbsp;{name}</span>
      <span>&nbsp;{channel}</span>
    </li>
  );
}
