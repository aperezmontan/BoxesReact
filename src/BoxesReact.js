import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Welcome, MainNav } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';

export class BoxesReact extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  login = () => {
    this.setState({ loggedIn: true });
  }

  renderApp(ComponentToRender) {
    return(
      <Provider store={store}>
        <ComponentToRender login={this.login} />
      </Provider>
    );
  }

  render(){
    const loggedIn = this.state.loggedIn;
    return loggedIn ? this.renderApp(MainNav) : this.renderApp(Welcome);
  }
}
