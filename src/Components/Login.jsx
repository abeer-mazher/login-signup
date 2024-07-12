import React, { useState } from 'react'
// import { Col, Container, FormControl, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Login({change}) {
  let [login,setLogin] = useState();
  
  return (
    <Form className='w-50 m-auto mt-5' onClick={(e)=>setLogin(e.preventDefault())}>
      <h3 className='text-center'>login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text role="button" onClick={change}>Not have an acoount</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    
    </Form>
  );

}

export default Login