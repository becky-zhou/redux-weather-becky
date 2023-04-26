import { getWeather } from "./ActionTypes";
//... spilt opertor?

const initialState = {
    city: '', 
    temperature: '',
    humidity: '',
    pressure: '',
    loading: false,
    data: {},
    error: null,
    success: null
  };
console.log("intialState at reducer:",initialState); 

//what is the action.payload for? 
const WeatherReducer =(state = initialState, action) => { 
    switch(action.type) {
        case getWeather.PENDING:
            return {
                ...state, 
                loading : true, 
                success: null
            }; 
        case getWeather.SUCCESS: 
            return {
                ...state, 
                loading : false, 
                data : action.payload,
                error : null,
                success: true
            }; 
        case getWeather.REJECTED: 
            return {
                ...state, 
                loading : false, 
                data : null, 
                error : action.payload,
                success: false
            }
        default: 
            return state; 
    }
}

  export default WeatherReducer;

