import React from 'react';
import Video from '../Video/Video';
import Article from '../Article/Article';
import HOC from '../HOC/HOC';

const HOCVideo = HOC(Video);
const HOCArticle = HOC(Article);

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <HOCVideo key={item.id} {...item} />;

      case 'article':
        return <HOCArticle key={item.id} {...item} />;
      default:
        return <></>;
    }
  });
}
