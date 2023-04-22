import { getWeather } from "./ActionTypes";

const initialState = {
    loading: false,
    data: null,
    error: null
  };


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

