import './App.css';
import React from 'react';
//import FetchWeather from './FetchWeather'; 
import { Provider } from 'react';
import Weather from './components/Weather';
import { Store } from './Store'; 


export const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Weather />
      </div>
    </Provider>
  )
}