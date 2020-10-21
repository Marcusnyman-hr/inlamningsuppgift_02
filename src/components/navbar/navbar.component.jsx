import React from 'react';
import {Link, withRouter} from 'react-router-dom'

import './navbar.styles.scss';

function Navbar({loggedOnUser, history, logout}) {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>Inlämningsuppgift 2</div>
      <span className="navbar-name">
      {loggedOnUser.username}
      </span>
      <div className='navbar-menu-container'>
        <nav>
          <ul className='navbar-menu'>
            {
            loggedOnUser.username ? 
            <li className='navbar-menu-item'><Link to='/members' className='navbar-menu-item-link'>Secret memebers</Link></li> 
            : 
            null
            }
            <li className='navbar-menu-item'><Link to='/contact' className='navbar-menu-item-link'>Contact</Link></li>
            <li className='navbar-menu-item'><Link to='/about' className='navbar-menu-item-link'>About</Link></li>
            {
            !loggedOnUser.username ? 
            <li className='navbar-menu-item'><Link to='/login' className='navbar-menu-item-link'>Log in</Link></li> 
            : 
            <li className='navbar-menu-item'><span className='navbar-menu-item-link'
            onClick={() => {
              logout();
              history.push('/');    
              }}>Log out</span></li>
            }
            {
            !loggedOnUser.username ? 
            <li className='navbar-menu-item'><Link to='/register' className='navbar-menu-item-link'>Register</Link></li> 
            : 
            null
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(Navbar)