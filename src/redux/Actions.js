//import Reducer from './Reducer'; 
import { getWeather } from './ActionTypes';
import axios from 'axios';

export const fetchWeather = (city) => {
  console.log(city);

  return (dispatch) => {
      dispatch({ type: getWeather.PENDING });
      // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d804734ee459510001eab20076e914f2`)
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d804734ee459510001eab20076e914f2`)
      .then(response => {
        const weatherData = {
          city: response.data.city.name,
          temperature: response.data.list.map(item => item.main.temp),
          humidity: response.data.list.map(item => item.main.humidity),
          pressure: response.data.list.map(item => item.main.pressure), 
          //temperatureToday: response.data.list.main[0].temp
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
