import React, { Component } from 'react';

import api from './../services/api.service';

export default class NewTouchpoint extends Component {
  constructor(props) {
    super(props)

    this.state = {
        touchpointType: '',
        date: '',
        companyName: '',
        roleOrPosition: '',
        contactPerson: '',
        additionalNotes: '',
    };
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

    api.createTouchpoint( this.props.userId, this.state ).then(response => console.log(response));
    this.props.history.push("/:userId");
    window.location.reload();
  }

  render() {

    //const { touchpointType, date, companyName, roleOrPosition, contactPerson, additionalNotes } = this.state.touchpoint;

    return (
      <div className='container'>
        <h2>New Touchpoint</h2>

        <form onSubmit={this._handleSubmit}>

          <label>
            Touchpoint Type:
            <input type="text" name='touchpointType' onChange={this.handleChange} />
          </label>

          <label>
            Date:
            <input type="date" name='date' onChange={this.handleChange} />
          </label>

          <label>
            Company Name:
            <input type="text" name='companyName' onChange={this.handleChange} />
          </label>

          <label>
            Role Position:
            <input type="text" name='roleOrPosition' onChange={this.handleChange} />
          </label>

          <label>
            Contact Person:
            <input type="text" name='contactPerson' onChange={this.handleChange} />
          </label>

          <label>
            Additional Notes:
            <input type="text" name='additionalNotes' onChange={this.handleChange} />
          </label>

          <button>Submit</button>
        </form>

      </div>
    )
  }
}
