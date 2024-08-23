import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ director, rating }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Nombre: {director}</h2>
        <h3 className="card-text">Rating: {rating}</h3>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  director: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieItem;

