import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { GameListView } from '../sheet-new-view'

export class GamesList extends Component {
  render() {
    var game_rows = [];
    var props = this.props

    this.props.games.forEach(function(game){
      game_rows.push(<GameListView game={game} key={game.home_team} newSheet={props.newSheet} {...props}/>);
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  game_title: {
    color: '#FF5252',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 20,
    padding: 10,
  }
});
