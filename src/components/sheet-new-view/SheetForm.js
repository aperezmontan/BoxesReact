import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export const SheetForm = (props) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.game_title}>
        {props.games[0].home_team} vs {props.games[0].away_team}
      </Text>
      <Text>
        Please fill out fields below:
      </Text>
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('name', text)}
        placeholder="Sheet Name"
        value=''
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('firstQtr', text)}
        placeholder="1st Qtr Prize"
        value=''
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('half', text)}
        placeholder="Halftime Prize"
        value=''
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('thirdQtr', text)}
        placeholder="3rd Qtr Prize"
        value=''
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('final', text)}
        placeholder="Final Prize"
        value=''
      />
      <TouchableHighlight onPress={() => props.handleCreateSheet()}>
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
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 10,
    borderColor: 'gray',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    borderColor: 'black',
  },
  sheetSubmit: {
    fontSize: (Dimensions.get('window').height - 54)/20, // 54 is the ios height
    backgroundColor: 'mediumaquamarine',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    overflow: 'hidden',
    marginBottom: 10,
    padding: 5,
  },
});