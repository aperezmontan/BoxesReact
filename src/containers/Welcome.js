import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserLoginForm } from '../components/welcome';

export class _Welcome extends Component {
  constructor() {
    super();
    this.state = {
      loginInfo: {
        username: '',
        password: ''
      },
    };
  }
  handleChange = (attribute, text) => {
    const loginInfo = this.props.loginInfo;
    loginInfo[attribute] = text;
    this.setState(loginInfo);
  }
  handleLogin = (loginInfo) => {
    this.props.login();
    this.props.fetchUser(loginInfo);

  }
  handleNewUser(){
    console.log("New User Button pressed");
  }
  render() {
    return(
      <UserLoginForm
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
        handleNewUser={this.handleNewUser}
        {...this.props}
      />
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  fetchUser(loginInfo) {
    dispatch({type: 'FETCH_USER', payload: loginInfo})
  }
})

const mapStateToProps = (state) => ({ loginInfo: state.users.loginInfo })

export const Welcome = connect(mapStateToProps, mapActionsToProps)(_Welcome)
