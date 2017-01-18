import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
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
  handleChange(attribute, text){
    const loginInfo = this.state.loginInfo;
    loginInfo[attribute] = text;
    this.setState(loginInfo);
  }
  handleLogin(){
    console.log("Login Button pressed");
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
        login={this.props.login}
        loginInfo={this.state.loginInfo}
      />
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  login(login) {
    dispatch({type: 'FETCH_USER', payload: login})
  }
})

const mapStateToProps = (state) => ({
  loginInfo: state.loginInfo
})

export const Welcome = connect(mapStateToProps, mapActionsToProps)(_Welcome)
