import { useState, useEffect } from 'react';


const FetchWeather = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cd9bd559cd2897b256a8925da31d52de')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []); 

    return (
        console.log('set')
    )
}

export default FetchWeather; 