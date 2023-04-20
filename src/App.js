import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { Routes, Route } from 'react-router-dom';
import FetchWeather from './FetchWeather'; 



//not routing to another page? 
//or route it to a page that routes back? that doesnt sound very good
//but it looks like a lot of code to do it all on one page


const HandleSubmit = () => {
  return(
    console.log('submit')
  )
}
const Weather = () => {
  return(
    <>
      <h1>Weather Redux</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="weather" element={<FetchWeather />} />
      </Routes>

    </>

  )
}
const Home = () => {
  return (
    <>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Enter a city" />
      </Form.Group>
      <Button onClick={HandleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}
export default Weather; 