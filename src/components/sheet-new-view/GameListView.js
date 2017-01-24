import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export class GameListView extends Component {
  render(){
    return(
      <TouchableHighlight onPress={() => this.props.newSheet(this.props.game)}>
        <Text style={styles.games}>
          {this.props.game.away_team} at {this.props.game.home_team}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  games: {
    textAlign: 'center',
    color: '#333333',
    fontFamily: 'Montserrat',
    padding: 5,
  }
});