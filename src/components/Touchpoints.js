import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from './../services/api.service';

export default class Touchpoint extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touchpoints: []
    };
  }

  componentDidMount() {

    api.getAllUserTouchpoints(this.props.userId).then((response) => {
      const touchpoints = response.data.data.userTouchpoints;
      this.setState({ touchpoints });
    });
  }

  deleteTouchpoint() {
    api.deleteTouchpoint( this.props.userId, )
    console.log('click');
  }

  render() {

    const columnHeaders = ['Touchpoint Type', 'Date', 'Company Name', 'Role Position', 'Contact Person', 'Additional Notes', 'Edit'];

    return (
      <div className='container'>
        <h1>User Touchpoints</h1>

        <Link to="/:userId/touchpoint/new">Add New Touchpoint</Link>

        <table>
          <thead>
            <tr>
              { columnHeaders.map((el, i) => {
                return <th key={i}>{el}</th>
              })
              }
            </tr>
          </thead>
          <tbody>

            { this.state.touchpoints.map(({touchpointType, date, companyName, roleOrPosition, contactPerson, additionalNotes, _id}) => (
              <tr>
                <td>{touchpointType}</td>
                <td>{date}</td>
                <td>{companyName}</td>
                <td>{roleOrPosition}</td>
                <td>{contactPerson}</td>
                <td>{additionalNotes}</td>
                <td><Link to={`/edit/touchpoint/${this.props.userId}/${_id}/`}>Edit</Link></td>

              </tr>
            ))
            }

          </tbody>


        </table>


      </div>
    )
  }
}
