import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { lastSearchSelector } from '../weather.selectors';

const LastViewed = ({ lastViewed }) => {

  return lastViewed.length === 0 ? null : (
    <div className="main__container">
      Last viewed items: 
      {lastViewed.map(item =>
        <Link key={item.city}
          className="main__container-item"
          to={`/${item.country}_${item.city}`}
        >
          <span>страна: {item.country}</span>
          <span>город: {item.city}</span>
          <div>
            <span>погода: {item.curent.weather[0].description}</span>
            <span>темп: {item.curent.temp}</span>
            <span>ощущается: {item.curent.feels_like}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

LastViewed.propTypes = {
  lastViewed: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = state => {
  return {
    lastViewed: lastSearchSelector(state),
  };
};

export default connect(mapState, null)(LastViewed);
