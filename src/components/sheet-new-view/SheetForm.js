import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';

// TODO: Line 16 needs to take in props or state to change the game name

export const SheetForm = (props) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.game_title}>
        {props.newSheet.home_team} vs {props.newSheet.away_team}
      </Text>
      <Text>
        Please fill out fields below:
      </Text>
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => {props.handleChange('name', text)}}
        value={props.newSheet.name}
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('firstQtr', text)}
        value={props.newSheet.firstQtr}
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('half', text)}
        value={props.newSheet.half}
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('thirdQtr', text)}
        value={props.newSheet.thirdQtr}
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('final', text)}
        value={props.newSheet.final}
      />
      <TouchableHighlight onPress={() => props.handleCreateSheet}>
        <Text style={styles.sheetSubmit}>
          Make a New Sheet !!
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)

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
  sheetInput: {
    height: (Dimensions.get('window').height - 54)/16, // 54 is the ios height
    borderColor: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  sheetSubmit: {
    height: (Dimensions.get('window').height - 54)/12, // 54 is the ios height
    borderColor: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  }
});