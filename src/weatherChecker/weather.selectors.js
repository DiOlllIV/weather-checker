import { createSelector } from 'reselect';

export const citiesDataSelector = state =>
  state.weather.citiesData;

export const weatherDataSelector = state =>
  state.weather.weatherData;

export const filterTextSelector = state => 
  state.weather.filterText;

export const lastSearchSelector = state => 
  state.weather.lastSearch;

export const filterWeather = createSelector(
  [weatherDataSelector, filterTextSelector],
  (weatherData, filterText) => 
    weatherData.filter(item => 
      item.city.toLowerCase().includes(filterText.toLowerCase())
    ),
);