import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { BoxesReact } from './src/BoxesReact'
import { Provider } from 'react-redux';
import { store } from './src/store';

const Main = () => (
  <Provider store={store}>
    <BoxesReact />
  </Provider>
);

AppRegistry.registerComponent('BoxesReact', () => Main);
