import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions'

import { Loading } from '../components/common'
import { UserLoginForm } from '../components/welcome'

export class _Welcome extends Component {
  constructor() {
    super();
    this.state = {
      loginInfo: {
        email: '',
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
    this.props.fetchUser(loginInfo);
  }
  handleNewUser(){
    console.log("New User Button pressed");
  }
  render() {
    var toRender = [];
    this.props.loading ? toRender.push(<Loading key={1}/>) : toRender.push(<UserLoginForm key={2} handleChange={this.handleChange} handleLogin={this.handleLogin} handleNewUser={this.handleNewUser} {...this.props} />)
    return(
      <View style={styles.container}>
        {toRender}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

const mapActionsToProps = (dispatch) => ({
  fetchUser(loginInfo) {
    dispatch(fetchUser(loginInfo))
  }
})

const mapStateToProps = (state) => ({ auth: state.auth, loading: state.loading, loginInfo: state.loginInfo })

export const Welcome = connect(mapStateToProps, mapActionsToProps)(_Welcome)
