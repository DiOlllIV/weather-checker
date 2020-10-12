import { fetchCitiesData, fetchWeatherData } from './weatherGateway';

export const CITIES_DATA = 'WEATHER/CITIES_DATA';
export const WEATHER_DATA = 'WEATHER/WEATHER_DATA';
export const LAST_SEARCH = 'WEATHER/LAST_SEARCH';
export const FILTER_TEXT = 'WEATHER/FILTERED_TEXT';

export const citiesData = (cities) => {
  const action = {
    type: CITIES_DATA,
    payload: {
      cities,
    },
  };

  return action;
};

export const weatherData = (weather) => {
  const action = {
    type: WEATHER_DATA, 
    payload: {
      weather,
    },
  };

  return action;
};

export const setFilterText = (text) => {
  const action = {
    type: FILTER_TEXT,
    payload: {
      text,
    },
  };

  return action;
};

export const lastSearch = (searchData) => {
  const action = {
    type: LAST_SEARCH,
    payload: {
      searchData,
    },
  };

  return action;
};

export const getCitiesData = () => {
  const thunkAction = function (dispatch) {
    fetchCitiesData()
      .then(data => 
        dispatch( citiesData(data) )
      );
  };

  return thunkAction;
};

export const getWeatherData = () => {
  const thunkAction = function (dispatch, getState) {
    
    const state = getState();
    const filterText = state.weather.filterText;
    const cities = state.weather.citiesData;
    const actualData = state.weather.weatherData;
    const actualCities = cities.filter(item => 
      item.name.toLowerCase() === filterText.toLowerCase());
    
    if (actualCities.length === 0)
      return;

    for(let i of actualData) {
      if ( i.city.toLowerCase() === filterText.toLowerCase() )
        return;
    }

    fetchWeatherData(actualCities)
      .then(data => 
        dispatch( weatherData([...data, ...actualData]) )
      ); 
  };

  return thunkAction;
};

export const setLastSearch = (data) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const actual = state.weather.lastSearch;

    if (actual.length === 5) {
      actual.pop()
    }

    const actualSearch = [data, ...actual];

    return dispatch( lastSearch(actualSearch) );
  };

  return thunkAction; 
};
