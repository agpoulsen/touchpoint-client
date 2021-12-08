import React, { Component } from 'react';

import api from './../services/api.service';

export default class EditTouchpoint extends Component {
  constructor(props) {
    super(props)

    this.state = {
        _id: '',
        touchpointType: '',
        date: '',
        companyName: '',
        roleOrPosition: '',
        contactPerson: '',
        additionalNotes: '',
        user: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
  }

  componentDidMount() {
    const params = this.props.match.params
    api.getSingleTouchpoint( params.userId, params.touchpointId).then((response) => {

    const touchpoint = response.data.data.touchpoint;
    const {
      _id,
      touchpointType,
      date,
      companyName,
      roleOrPosition,
      contactPerson,
      additionalNotes,
      user
    } = touchpoint;
    this.setState({ _id,
    touchpointType,
    date,
    companyName,
    roleOrPosition,
    contactPerson,
    additionalNotes,
    user });
  })
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }

  _handleSubmit(event) {
    event.preventDefault();

    const params = this.props.match.params;
    api.updateTouchpoint( params.userId, params.touchpointId, this.state ).then(response => console.log(response));
    this.props.history.push("/:userId");
  }

  _handleDelete(event) {
    const params = this.props.match.params;
    api.deleteTouchpoint( params.userId, params.touchpointId );
    this.props.history.push("/:userId");
  }

  render() {

    //const { touchpointType, date, companyName, roleOrPosition, contactPerson, additionalNotes } = this.state.touchpoint;

    return (
      <div className='container'>
        <h2>Edit Touchpoint</h2>

        <form onSubmit={this._handleSubmit}>

          <label>
            Touchpoint Type:
            <input type="text" name='touchpointType' onChange={this.handleChange} value={this.state.touchpointType || ""}/>
          </label>

          <label>
            Date:
            <input type="date" name='date' onChange={this.handleChange} value={this.state.date || ""}/>
          </label>

          <label>
            Company Name:
            <input type="text" name='companyName' onChange={this.handleChange} value={this.state.companyName || ""}/>
          </label>

          <label>
            Role Position:
            <input type="text" name='roleOrPosition' onChange={this.handleChange} value={this.state.roleOrPosition || ""}/>
          </label>

          <label>
            Contact Person:
            <input type="text" name='contactPerson' onChange={this.handleChange} value={this.state.contactPerson || ""}/>
          </label>

          <label>
            Additional Notes:
            <input type="text" name='additionalNotes' onChange={this.handleChange} value={this.state.additionalNotes || ""}/>
          </label>

          <button>Submit</button>
        </form>

        <div>
          <button onClick={this._handleDelete}>Delete</button>
        </div>

      </div>
    )
  }
}
