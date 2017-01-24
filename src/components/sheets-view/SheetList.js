import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export class SheetList extends Component {
  border(color){
    return {
      borderBottomColor: color,
      borderBottomWidth: 1,
    }
  }
  render(){
    return(
      <View style={[styles.container, this.border('black')]}>
        <TouchableHighlight onPress={() => this.props.goToSheet(this.props.sheet)}>
          <View style={styles.container}>
            <Text style={styles.game_title}>
              Name: {this.props.sheet.name}
            </Text>
            <Text style={styles.games}>
              Game: {this.props.sheet.away_team} vs {this.props.sheet.home_team}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
    paddingBottom: 10,
  }
});
