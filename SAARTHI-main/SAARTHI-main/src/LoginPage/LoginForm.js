import React, { Component } from 'react';
import {  Form, FormGroup, FormControl} from 'react-bootstrap';
import "./button.css";


class LoginForm extends Component {


  render() {
    return (
      <div>
        <div className='formback'>
        <h2>Login to your account</h2>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formSubmit">
            <div className='buttoncontrol'>
              <a href='/home' className='loginButton'>login</a>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
