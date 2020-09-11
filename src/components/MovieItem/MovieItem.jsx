import React from 'react';
import PropTypes from 'prop-types';

import './movieItem.css';

export const MovieItem = ({ poster, realizeYear, filmType, filmaName }) => {
  return (
    <figure className="movieItemContainer">
      <img className="posterImage" src={poster} />
      <div className="threeDots"></div>
      <figcaption>
        <div className="captionAndYear">
          <label className="title">{filmaName}</label>
          <span className="realizeYear">{realizeYear}</span>
        </div>
        <span className="filmType">{filmType}</span>
      </figcaption>
    </figure>
  );
};

MovieItem.propTypes = {
  poster: PropTypes.string,
  realizeYear: PropTypes.string,
  filmType: PropTypes.string,
  filmaName: PropTypes.string,
};
