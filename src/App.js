import React, {useState} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import Login from './components/login/login.component';
import Register from './components/register/register.component';
import ContentContainer from './components/content-container/content-container.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Members from './components/members/members.component';

function App() {
  //user "database"
  const [users, setUsers] = useState([
    {
      name: 'admin',
      lastName: 'adminsson',
      email: 'admin@admin.se',
      username: 'admin',
      password: 'password'
    }, 
    {
      name: 'Marcus',
      lastName: 'Nyman',
      email: 'Marcus@admin.se',
      username: 'maxxe',
      password: 'password'
    },
  ]);

  //user currently logged in
  const [loggedOnUser, setLoggedOnUser] = useState({})

  //register new user
  const register = (newUser) => {
    setUsers(prevState => ([...prevState, newUser]))
    return true
  }
  //login a user
  const login = (userLogginIn) => {
    const user = users.find(user => user.username === userLogginIn.username.toLowerCase());
    if (!user) return
    if(user.password === userLogginIn.password) {
      setLoggedOnUser(user)
      //set localstorage (according to assignment specs)
      localStorage.setItem('loggedOnUser', user.name);
      return true
    } else {
      return false
    }
  }
  //logout, clear localstorage
  const logout = () => {
      setLoggedOnUser({})
      localStorage.removeItem('loggedOnUser');
  }
  
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar loggedOnUser={loggedOnUser} logout={logout}/>
    <Switch>
      <Route exact path='/register' children={
        <ContentContainer heading="Register">
          <Register register={register}/>
        </ContentContainer>}>
      </Route>

      <Route exact path="/" render={() => {
       return (
         loggedOnUser.username ?
         <ContentContainer><h1>secret page</h1></ContentContainer> :
         <Redirect to="/login" /> 
       )
       }}
       />
      <Route exact path='/login' children={
        <ContentContainer heading="Login">
          <Login login={login}/>
        </ContentContainer>}>
      </Route>

      <Route exact path='/contact' children={
        <ContentContainer heading="Contact">
          <Contact />
        </ContentContainer>}>
      </Route>

      <Route exact path='/about' children={
        <ContentContainer heading="About">
          <About />
      </ContentContainer>}>
      </Route>

      <Route exact path="/members" render={() => {
       return (
         loggedOnUser.username ?
         <ContentContainer heading='Secret members'><Members /></ContentContainer> :
         <Redirect to="/login" /> 
       )
       }}
       />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
