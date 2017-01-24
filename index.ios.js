import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { BoxesReact } from './src/BoxesReact'

const Main = () => (
  <BoxesReact />
);

AppRegistry.registerComponent('BoxesReact', () => Main);
