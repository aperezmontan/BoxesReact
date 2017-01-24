import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export class SheetList extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.goToSheet(this.props.sheets[0])}>
          <View style={styles.container}>
            <Text style={styles.game_title}>
              Name: {this.props.sheets[0].name}
            </Text>
            <Text style={styles.games}>
              Game: {this.props.sheets[0].away_team} vs {this.props.sheets[0].home_team}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
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
  },
  games: {
    textAlign: 'center',
    color: '#333333',
    fontFamily: 'Montserrat',
    padding: 5,
  }
});
