//import Reducer from './Reducer'; 
import { getWeather } from './ActionTypes';
import axios from 'axios';

export const fetchWeather = (city) => {
    return (dispatch) => {
      dispatch({ type: getWeather.PENDING });
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cd9bd559cd2897b256a8925da31d52de`)
        .then(response => {
          const weatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure
          };
          dispatch({ type: getWeather.SUCCESS, payload: weatherData });
        })
        .catch(error => {
          dispatch({ type: getWeather.REJECTED, payload: error.message });
        });
    };
  };

// export const GetWeatherData = (e) => {
//     const [temp, setTemp] = useState(''); 
//     const [city, setCity] = useState(''); 
//     const [humidity, setHumidity] = useState(''); 
//     const [pressure, setPressure] = useState(''); 


//     e.preventDefault(); 
//     const weatherData = {temp, city, humidity, pressure}

//     useEffect(()=> {
//         fetch(getWeather, {
//             method:'POST', 
//             headers: { "Content-Type": "application/json"}, 
//             body: JSON.stringify(weatherData)
//         })
//         .then((data) => {
//             setTemp(data.temp);
//             setCity(data.city);
//             setHumidity(data.humidity);
//             setPressure(data.pressure);
//         })
//         .catch((error) => {
//             console.error('Error finding city', error)})
//         }
//         )}