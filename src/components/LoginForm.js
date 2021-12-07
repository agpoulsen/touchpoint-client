import React, { Component } from 'react'
import axios from 'axios';

export default class LoginForm extends Component {
  render() {
    return (

      <div className='container'>

        <h1>Login</h1>
        
        <form>
          <label>
            Email:
            <input type="email" required/>
          </label>

          <label>
            Password:
            <input type="password" required/>
          </label>

          <button>Log In</button>

        </form>
      </div>
    )
  }
}
