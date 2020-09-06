import React from 'react';

import MovieItem from '../MovieItem';

import './movieItemList.css';

export const MovieItemList = ({ data }) => {
  return (
    <div className="movieItemList">
      {data.map((dataItem) => (
        <MovieItem key={dataItem.id} {...dataItem} />
      ))}
    </div>
  );
};
