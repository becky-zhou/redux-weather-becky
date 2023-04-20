import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 


const Weather = () => {
  return (
    <>
      <h1>Weather Redux</h1>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Enter a city" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    

    </>
  )
}
export default Weather; 