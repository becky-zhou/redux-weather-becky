import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer'; 

//higher order function, takes a function as an argument
const store = configureStore(Reducer); 

export default store;  