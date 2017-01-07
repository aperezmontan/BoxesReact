import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

// get API functionality
import Api from './api.js'
import Game from './game.js'
import Sheet from './sheet.js'

var Home = React.createClass({
  goToGamesList(){
    this.props.navigator.push({
      title: 'listGames',
      component: 'Game',
      onPress: this.onPress,
      rightText: 'ALERT!'
    });
  },
  goToSheetList(){
    this.props.navigator.push({
      title: 'listSheets',
      component: 'Sheet',
      onPress: this.onPress,
      rightText: 'ALERT!',
      api:{
        route: 'sheets',
        params: null,
        body: null,
      },
    });
  },
  render() {
    var navigator = this.props.navigator

    return (
      <View style={styles.container}>
        <Text>
          { navigator.title }
        </Text>
        <TouchableHighlight onPress={() => this.goToGamesList()}>
          <Text style={styles.games}>
            CREATE NEW SHEET
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.goToSheetList()}>
          <Text style={styles.games}>
            SHEET LIST
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  games: {
    textAlign: 'center',
    color: '#333333',
    fontFamily: 'Montserrat',
    padding: 5,
  },
  game_title: {
    color: '#FF5252',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 20,
    padding: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 30,
  },
});

module.exports = Home;