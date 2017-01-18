import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import { Sheet } from './Sheet'

export const Game = React.createClass({
  getInitialState(){
    return {
      games: [
        {
          home_team: "New York Giants",
          away_team: "Philadelphia Eagles",
        },
        {
          home_team: "Cleveland Browns",
          away_team: "Dallas Cowboys",
        },
      ]
    }
  },
  render() {
    var navigator = this.props.navigator;
    var game_rows = [];

    this.state.games.forEach(function(game){
      game_rows.push(<GameListView game={game} key={game.home_team} navigator={navigator}/>);
    });
    return (
      <View style={styles.container}>
        <Text style={styles.game_title}>
          GAMES
        </Text>
        <View>
          {game_rows}
        </View>
      </View>
    );
  }
})

var GameListView = React.createClass({
  onPress() {
    alert("YO FROM RIGHT BUTTON")
  },
  goToCreateSheet(game){
    this.props.navigator.push({
      title: 'createSheet',
      component: Sheet,
      onPress: this.onPress,
      game: game,
      rightText: 'ALERT!',
      api:{
        route: 'null',
        params: null,
        body: null,
      },
    });
  },
  render(){
    var away_team = this.props.game.away_team
    var home_team = this.props.game.home_team

    return(
      <TouchableHighlight onPress={() => this.goToCreateSheet(this.props.game)}>
        <Text style={styles.games}>
          {this.props.game.away_team} at {this.props.game.home_team}
        </Text>
      </TouchableHighlight>
    )
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
