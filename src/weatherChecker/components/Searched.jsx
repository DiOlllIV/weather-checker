import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../weather.selectors';
import * as weatherActions from '../weather.actions';

const Searched = ({ setLastSearch, filterText, weatherData, setFilterText }) => {

  return filterText === '' ? null : (
    <div className="main__container">
      {weatherData.map(item =>
        <Link key={`${item.city}_${item.country}_${item.curent.temp}`}
          className="main__container-item"
          to={`/${item.country}_${item.city}`}
          onClick={() => {setLastSearch(item); setFilterText('')}}
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

Searched.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.shape()),
  filterText: PropTypes.string,
  setLastSearch: PropTypes.func.isRequired,
  setFilterText: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    weatherData: selectors.filterWeather(state),
    filterText: selectors.filterTextSelector(state),
  };
};

const mapDispatch = {
  setFilterText: weatherActions.setFilterText,
  setLastSearch: weatherActions.setLastSearch,
};

export default connect(mapState, mapDispatch)(Searched);