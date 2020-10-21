import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './register.styles.scss';

class Register extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }

  //handle input change
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  //handle form submit
  handleSubmit = event => {
    event.preventDefault()
    //state destructuring
    const {name, lastName, email, username, password} = this.state;
    //create new user object
    const newUser = {
      name,
      lastName,
      email,
      username,
      password
    }
    //pass newuser to register(), if return is true push /login
    if(this.props.register(newUser)) {
      this.props.history.push('/login')
    }
  }
  render() {
    const {name, lastName, email, password, username} = this.state;
    //weird autocomplete's to try to prevent browsers autofill.
    return (
      <div className="register">
      <form className="register-form" 
      onSubmit={this.handleSubmit}
      autoComplete="off"
      >
        <FormInput 
          label="Name"
          type='text'
          name='name'
          value={name}
          autoComplete="nam_noautofill"
          required  
          onChange={this.handleChange}
        />

        <FormInput 
          label="Last name"
          type='text'
          name='lastName'
          value={lastName}
          autoComplete="last_noautofill"
          required  
          onChange={this.handleChange}
        />

        <FormInput 
          label="E-mail"
          type='email'
          icon='email'
          name='email'
          value={email}
          autoComplete="mejl_noautofill"
          required  
          onChange={this.handleChange}
        />

        <FormInput 
          label="Username"
          type='text'
          icon='user'
          name='username'
          value={username}
          autoComplete="unam_noautofill"
          required  
          onChange={this.handleChange}
        />
        <FormInput 
          label="Password" 
          type="password" 
          icon="password"
          name='password'
          value={password}
          autoComplete="psw_noautofill"
          required
          onChange={this.handleChange}
        />
        <CustomButton>Register</CustomButton>
      </form>
      <Link to='/' className='login-link'>Already have an account? Log in here!</Link>
    </div>
    )
  }
}

export default withRouter(Register)