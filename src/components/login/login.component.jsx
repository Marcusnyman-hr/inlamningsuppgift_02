import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './login.styles.scss';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  //handle change in inputs
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }
  //handle formsubmit
  handleSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state;
    //create user object
    const user = {
      username,
      password
    }
    //run prop login() and handle the return, if true push to /members
    if(this.props.login(user)) {
      this.props.history.push('/members')
    }
  }
  render() {
    //state desctructure
    const {password, username} = this.state;
    return (
      <div className="login">
      <form className="login-form" onSubmit={this.handleSubmit}>
      <FormInput 
        label="Username"
        icon="user"
        type='text'
        name='username'
        value={username}
        autoComplete="off"
        required
        onChange={this.handleChange}
        />
        <FormInput 
        label="Password" 
        type="password" 
        icon="password"
        name='password'
        value={password}
        autoComplete="current-password"
        required
        onChange={this.handleChange}
        />
        <CustomButton>Login!</CustomButton>
      </form>
      <Link to='/register' className='register-link'>Dont have an account? Register here!</Link>
    </div>
    )
  }
}
export default withRouter(Login)
