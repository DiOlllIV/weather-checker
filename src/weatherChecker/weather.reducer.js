import { CITIES_DATA, WEATHER_DATA, FILTER_TEXT, LAST_SEARCH } from './weather.actions';

const initialState = {
  citiesData: [],
  weatherData: [],
  lastSearch: [],
  filterText: '',
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case CITIES_DATA : {
      return {
        ...state, 
        citiesData: action.payload.cities,
      };
    }

    case WEATHER_DATA : {
      return {
        ...state, 
        weatherData: action.payload.weather,
      };
    }

    case FILTER_TEXT : {
      return {
        ...state,
        filterText: action.payload.text,
      };
    }

    case LAST_SEARCH : {
      return {
        ...state,
        lastSearch: action.payload.searchData,
      };
    }

    default:
      return state;
  }
};

export default weatherReducer;