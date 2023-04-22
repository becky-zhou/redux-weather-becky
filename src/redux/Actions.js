//import Reducer from './Reducer'; 
import { useState, useEffect} from 'react';
import { getWeather } from './ActionTypes';

export const GetWeatherData = (e) => {
    const [temp, setTemp] = useState(''); 
    const [city, setCity] = useState(''); 
    const [humidity, setHumidity] = useState(''); 
    const [pressure, setPressure] = useState(''); 


    e.preventDefault(); 
    const weatherData = {temp, city, humidity, pressure}

    useEffect(()=> {
        fetch(getWeather, {
            method:'POST', 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(weatherData)
        })
        .then((data) => {
            setTemp(data.temp);
            setCity(data.city);
            setHumidity(data.humidity);
            setPressure(data.pressure);
        })
        .catch((error) => {
            console.error('Error finding city', error)})
        }
        )}