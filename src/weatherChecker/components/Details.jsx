import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataSelector } from '../weather.selectors';
import { Route, Link } from 'react-router-dom';
import { getTime, getDate, thousand } from '../js/dateFormatting';
import '../styles/details.scss';

const Details = ({ weatherData }) => {
  return weatherData.map(item => (
    <Route key={`${item.city}_${item.country}_${item.curent.temp}`}
      path={`/${item.country}_${item.city}`}
    >
      <div className="details">
        <Link
          to={`/`}
        >{`<= back`}</Link>
        <span className="details-city">{item.city}</span>
        {item.daily.map(key => (
          <div className="details__section"
            key={key.dt + key.dew_point}
          >
            {getDate(new Date(key.dt * thousand))}
            <div className="details__section-container">
              <div className="details__section-container__time">
                <span>
                  рaссвет: {getTime(new Date(key.sunrise * thousand))}
                </span>
                <span>
                  закат: {getTime(new Date(key.sunrise * thousand))}
                </span>
              </div>
              температура:
              <div className="details__section-container__temp">
                <div className="details__section-container__temp-box">
                  <span>мин: {key.temp.min}</span>
                  <span>макс: {key.temp.max}</span>
                </div>
                <div className="details__section-container__temp-box">
                  <span>утром: {key.temp.morn}</span>
                  <span>ощущается как: {key.feels_like.morn}</span>
                </div>
                <div className="details__section-container__temp-box">
                  <span>днем: {key.temp.day}</span>
                  <span>ощущается как: {key.feels_like.day}</span>
                </div>
                <div className="details__section-container__temp-box">
                  <span>вечер: {key.temp.eve}</span>
                  <span>ощущается как: {key.feels_like.eve}</span>
                </div>
                <div className="details__section-container__temp-box">
                  <span>ночью: {key.temp.night}</span>
                  <span>ощущается как: {key.feels_like.night}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Route>
  ));
};

Details.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.shape()),
}

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  }
};
export default connect(mapState, null)(Details);