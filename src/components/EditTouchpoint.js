import React, { Component } from 'react';

import TouchpointForm from './TouchpointForm';
import api from './../services/api.service';

export default class EditTouchpoint extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touchpoint: {
        touchpointType: '',
        date: '',
        companyName: '',
        roleOrPosition: '',
        contactPerson: '',
        additionalNotes: ''
      }
    };
  }

  componentDidMount() {
    const params = this.props.match.params
    api.getSingleTouchpoint( params.userId, params.touchpointId).then((response) => {

    const touchpoint = response.data.data.touchpoint;
    this.setState({ touchpoint });
  })
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }

  render() {

    //const { touchpointType, date, companyName, roleOrPosition, contactPerson, additionalNotes } = this.state.touchpoint;

    return (
      <div className='container'>
        <h2>Edit Touchpoint</h2>

        <form>

          <label>
            Touchpoint Type:
            <input type="text" name='touchpointType' onChange={this.handleChange} value={this.state.touchpoint.touchpointType || ""}/>
          </label>

          <label>
            Date:
            <input type="date" name='date' onChange={this.handleChange} value={this.state.touchpoint.date || ""}/>
          </label>

          <label>
            Company Name:
            <input type="text" name='companyName' onChange={this.handleChange} value={this.state.touchpoint.companyName || ""}/>
          </label>

          <label>
            Role Position:
            <input type="text" name='roleOrPosition' onChange={this.handleChange} value={this.state.touchpoint.roleOrPosition || ""}/>
          </label>

          <label>
            Contact Person:
            <input type="text" name='contactPerson' onChange={this.handleChange} value={this.state.touchpoint.contactPerson || ""}/>
          </label>

          <label>
            Additional Notes:
            <input type="text" name='additionalNotes' onChange={this.handleChange} value={this.state.touchpoint.additionalNotes || ""}/>
          </label>

          <button>Submit</button>
        </form>

      </div>
    )
  }
}
