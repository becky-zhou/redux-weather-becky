

import React, { useState, useEffect } from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button'; 
//import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import { getWeather } from '../redux/ActionTypes';
//import WeatherStore from './redux/Store'; 

  
const Weather = () => {
  const [searchInput, setSearchInput] = useState('');
  const temperature = useSelector(state => state.weather.temperature); 
  const pressure = useSelector(state => state.weather.pressure); 
  const humidity = useSelector(state => state.weather.humidity); 

  const dispatch = useDispatch(); 
  
  const HandleSubmit = (e) => {
    e.preventDefault(); 
    if(searchInput !== ''){
      console.log('Search input:', searchInput); 
      dispatch(fetchWeather(searchInput)); 
    }
    console.log('weatherData at weather.js:', temperature.temperature, pressure.pressure); 

  }

  // useEffect(() => {
  //   if (weatherData && weatherData.success) {
  //     console.log('Weather data loaded:', weatherData.data);
  //   }
  // }, [weatherData]);

  return (
    <div>
      <div className="heading"><h1>Weather</h1> </div>
        <form className="search-form" onSubmit={HandleSubmit}>
          <input 
            type="text" 
            value={searchInput} 
            placeholder='Enter a City'
            onChange={(e) => setSearchInput(e.target.value)} 
          />
          <button type="submit">Get Weather</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperture(F)</th>
              <th scope="col">Pressure(hPa)</th>
              <th scope="col">Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               {getWeather.success ?  (
                  <React.Fragment>
                    <td>
                      <b>City</b>{" "}
                      {searchInput}
                    </td>
                    <td>
                      <b>Temp</b>{" "}
                      {temperature}
                    </td>
                    <td>
                      <b>Pressure</b>{" "}
                      {pressure}
                    </td>
                    <td>
                      <b>Humidity</b>{" "}
                      {humidity}
                    </td>
                  </React.Fragment>
                ) : null}
            </tr>
          </tbody>
        </table>
    </div>
  );

  }
  export default Weather; 