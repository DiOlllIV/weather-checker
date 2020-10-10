import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as weatherActions from '../weather.actions';
import Searched from './Searched';
import LastViewed from './LastViewed';
import '../styles/main.scss';

const Main = ({ getCitiesData, setFilterText, getWeatherData }) => {
  
  useEffect(() => {
    getCitiesData();
  })

  return (
    <section className="main">
      <span className="main-head">Check weather in your city:</span>
      <input type="text"
        className="main__input"
        onChange={(e) => { setFilterText(e.target.value); getWeatherData()}}
      />
      <Searched />
      <LastViewed />
    </section>
  );
};

Main.propTypes = {
  setFilterText: PropTypes.func.isRequired,
  getCitiesData: PropTypes.func.isRequired,
  getWeatherData: PropTypes.func.isRequired,
};

const mapDispatch = {
  setFilterText: weatherActions.setFilterText,
  getCitiesData: weatherActions.getCitiesData,
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(null, mapDispatch)(Main);