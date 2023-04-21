import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
//import FetchWeather from './FetchWeather'; 



const HandleSubmit = () => {
  return(
    console.log('submit')
  )
}

const Weather = () => {
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