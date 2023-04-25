//import Reducer from './Reducer'; 
import { getWeather } from './ActionTypes';
import axios from 'axios';

export const fetchWeather = (city) => {
  return (dispatch) => {
      dispatch({ type: getWeather.PENDING });
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d804734ee459510001eab20076e914f2`)
      .then(response => {
        const weatherData = {
          city: response.data.name,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure
        };
        //this is loging the right data but its not at weather.js what does that mean
        //is something wrong with use seletor? 
        console.log("weatherData at actions:", weatherData);
        dispatch({ type: getWeather.SUCCESS, payload: weatherData });
      })
      .catch(error => {
        dispatch({ type: getWeather.REJECTED, payload: error.message });
      });
    }
  };
