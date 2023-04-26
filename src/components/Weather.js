

import React, { useState } from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button'; 
//import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import { getWeather } from '../redux/ActionTypes';
//import WeatherStore from './redux/Store'; 
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';


  
const Weather = () => {
  const [searchInput, setSearchInput] = useState('');
  const weatherData = useSelector(state => state.weather); 

  const dispatch = useDispatch(); 
  
  const HandleSubmit = (e) => {
    e.preventDefault(); 
    if(searchInput !== ''){
      console.log('Search input:', searchInput); 
      dispatch(fetchWeather(searchInput)); 
    }
    console.log('weatherData at weather.js:', weatherData.data); 

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
               {weatherData && getWeather.SUCCESS ?  (
                  <React.Fragment>
                    <td>
                      {weatherData.data.city}
                    </td>
                    <td>
                      <Sparklines data={weatherData.data.temperature}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>
                      {/* {weatherData.data.temperature[0]} */}
                    </td>
                    <td>
                    <Sparklines data={weatherData.data.pressure}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>                    
                    </td>
                    <td>
                    <Sparklines data={weatherData.data.humidity}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>                    
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