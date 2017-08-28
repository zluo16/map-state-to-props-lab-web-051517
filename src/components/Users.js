import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return <li>{user.userName} - {user.hometown}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
