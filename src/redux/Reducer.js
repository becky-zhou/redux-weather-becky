import { getWeather } from "./ActionTypes";
//... spilt opertor?

const initialState = {
    city: '', 
    temperature: '',
    humidity: '',
    pressure: '',
    loading: false,
    data: null,
    error: null
  };
console.log("intialState at reducer:",initialState); 

//what is the action.payload for? 
const WeatherReducer =(state = initialState, action) => { 
    switch(action.type) {
        case getWeather.PENDING:
            return {
                ...state, 
                loading : true, 
                data : null, 
                error : null
            }; 
        case getWeather.SUCCESS: 
            return {
                ...state, 
                loading : false, 
                data : action.payload,
                error : null
            }; 
        case getWeather.REJECTED: 
            return {
                ...state, 
                loading : false, 
                data : null, 
                error : action.payload
            }
        default: 
            return state; 
    }
}

  export default WeatherReducer;

