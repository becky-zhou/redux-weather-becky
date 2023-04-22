import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import WeatherReducer from './Reducer'; 
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


//higher order function, takes a function as an argument
const Store = configureStore(WeatherReducer,composeWithDevTools(applyMiddleware(thunk))
); 

export default Store;  
