import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Signup({change}) {
    let [signup,setsignup] = useState()
  return (
    <Form className='w-50 m-auto mt-5' onClick={(e)=>setsignup(e.preventDefault())}>
      <h3 className='text-center'>Signup</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Repeat your Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat your Password" />
        <Form.Text role="button" onClick={change}>Already have an acoount</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    
    </Form>
  )
}

export default Signup