

import React, { useState, useEffect } from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button'; 
//import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/Actions';


  
const Weather = () => {
  const dispatch = useDispatch(); 
  const [city, setCity] = useState(''); 
  const [searchInput, setSearchInput] = useState('');
  const weatherData = useSelector(state => state); 

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  
  const HandleSubmit = (e) => {
    e.preventDefault(); 
    if(city){
    dispatch(fetchWeather(searchInput)); 
    setSearchInput(''); 
    }
  }

  return (
    <div>
      <div className="heading"><h1>Weather</h1> </div>
        <form onSubmit={HandleSubmit}>
          <input 
            type="text" 
            value={city} 
            placeholder='Enter a City'
            onChange={(e) => setCity(e.target.value)} 
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
              <td><b>City</b>
              {weatherData.success ? weatherData.data.main.name : null}
              </td>
              <td><b>Temp</b>{" "}
              {weatherData.success ? weatherData.data.main.temp : null}
              </td>
              <td><b>Humidity</b>{" "}
                {weatherData.success ? weatherData.data.main.humidity : null}
              </td>
              <td>
                <b>Pressure</b>{" "}
                {weatherData.success ? weatherData.data.main.pressure : null}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );

  }
  export default Weather; 