import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ActivityIndicator
} from 'react-native';

export const Loading = React.createClass({
  render(){
    console.log(this.props)
    // var away_team = this.props.sheet.away_team
    // var home_team = this.props.sheet.home_team

    return(
      <View>
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  boxContainer: {
    // flex: 1,
    // backgroundColor: '#CCC',
    // // margin: 10,
    // width: 35,
    // height: 35
  },
  boxText:{
    justifyContent: 'center',
    alignItems: `stretch`,
    textAlign: 'center',
  },
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
  },
  scrollViewContainer:{
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  sheetContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});