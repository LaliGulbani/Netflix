import React from 'react';

import './resultCount.css';

export const ResultCount = ({ count }) => {
  return (
    <p className="resultCountTitle">
      <span className="moviesCount">{count} </span>
      movies found
    </p>
  );
};
