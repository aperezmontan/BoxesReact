import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Welcome } from './containers';
import { MainTabNav } from './navigators';

export class _BoxesReact extends Component {
  constructor() {
    super();
  }

  renderApp(ComponentToRender) {
    return(
      <ComponentToRender login={this.login} />
    );
  }

  render(){
    return this.props.auth ? this.renderApp(MainTabNav) : this.renderApp(Welcome);
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })

export const BoxesReact = connect(mapStateToProps, null)(_BoxesReact)