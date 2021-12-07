import React, { Component } from 'react'

export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }

  _handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className='container'>
        <h1>Sign Up</h1>

        <form onSubmit={ this._handleSubmit }>
          <label>
            Name:
            <input name='name' type="text" required onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input name='email' type="email" required onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input name='password' type="password" required onChange={this.handleChange} />
          </label>

          <label>
            Password Confirm:
            <input name='passwordConfirm' type="password" required onChange={this.handleChange} />
          </label>

          <button>Sign Up!</button>

        </form>
      </div>
    )
  }
}
