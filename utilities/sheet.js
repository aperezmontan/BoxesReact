import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

// get API functionality
import Api from './api.js'

var Sheet = React.createClass({
  getInitialState() {
    return {
      sheets: [],
      name: "Name",
      first_qtr: "10%",
      half: "25%",
      third_qtr: "15%",
      final_score: "50%",
    };
  },
  componentDidMount() {
    api = this.props.route.api;
    Api(api.route, api.params, api.body)
    .then((response) => {
      this.setState({
        sheets: response.sheets
      })
    })
  },
  border(color){
    return {
      // borderColor: color,
      // borderWidth: 4,
    }
  },
  render() {
    var navigator = this.props.navigator;
    var route = this.props.route
    var game = route.game
    var sheet_rows = []


    console.log(route.title);
    if (route.title === 'createSheet'){
      return (
      <View style={[styles.container, this.border('black')]}>
        <View style={[styles.container, this.border('black')]}>
          <Text style={styles.game_title}>
            Game: {game.away_team} at {game.home_team}
          </Text>
          <Text>
            Please fill out fields below:
          </Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(fir) => this.setState({first_qtr})}
              value={this.state.first_qtr}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(half) => this.setState({half})}
              value={this.state.half}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(th) => this.setState({third_qtr})}
              value={this.state.third_qtr}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(final_score) => this.setState({final_score})}
              value={this.state.final_score}
            />
        </View>
      </View>
      );
    } else if (route.title === 'listSheets'){
      this.state.sheets.forEach(function(sheet){
        sheet_rows.push(<SheetListView sheet={sheet} key={sheet.id} navigator={navigator}/>);
      });
      return (
        <View style={[styles.container, this.border('black')]}>
          <View style={[styles.container, this.border('black')]}>
            {sheet_rows}
          </View>
        </View>
      );
    } else {
      var sheet = this.state.sheets
      return (
        <View style={[styles.container, this.border('black')]}>
          <SheetView sheet={sheet}/>
        </View>
      );
    }
  }
})

var BoxView = React.createClass({
  border(color){
    return {
      borderColor: color,
      borderWidth: 1,
      borderRadius: 4,
    }
  },
  onPress() {
    alert("YO FROM RIGHT BUTTON")
  },
  selectBox(away_team_id, home_team_id){
    console.log(away_team_id, home_team_id)
  },
  render(){
    away_team_id = this.props.away_coord;
    home_team_id = this.props.home_coord;
    return(
      <View style={[styles.boxContainer, this.border('black')]}>
        <TouchableHighlight onPress={() => this.selectBox(away_team_id, home_team_id)}>
          <View style={styles.scrollView}>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
})

var SheetView = React.createClass({
  border(color){
    return {
      // borderColor: color,
      // borderWidth: 4,
    }
  },
  render(){
    var away_team = this.props.sheet.away_team;
    var home_team = this.props.sheet.home_team;
    var home_coords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var away_coords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var boxes = [];
    home_coords.forEach(function(home_coord){
      away_coords.forEach(function(away_coord){
        key = away_coord+home_coord
        boxes.push(<BoxView home_coord={home_coord} away_coord={away_coord} key={key}/>)
      });
    });
    return(
      <View style={[styles.scrollViewContainer, this.border('black')]}>
        <ScrollView
          style={styles.scrollView}
          maximumZoomScale = {3}
          minimumZoomScale = {1}
        >
          <View style={[styles.sheetContainer, this.border('black')]}>
            {boxes}
          </View>
        </ScrollView>
      </View>
    )
  }
})

var SheetListView = React.createClass({
  onPress() {
    alert("YO FROM RIGHT BUTTON")
  },
  goToSheet(sheet){
    this.props.navigator.push({
      title: sheet.name,
      component: Sheet,
      sheet: sheet,
      onPress: this.onPress,
      rightText: 'ALERT!',
      api:{
        route: 'sheets',
        params: null,
        body: sheet.id,
      },
    });
  },
  render(){
    var away_team = this.props.sheet.away_team
    var home_team = this.props.sheet.home_team

    return(
      <TouchableHighlight onPress={() => this.goToSheet(this.props.sheet)}>
        <View style={styles.container}>
          <Text style={styles.game_title}>
            {this.props.sheet.name}
          </Text>
          <Text style={styles.games}>
            Game: {away_team} at {home_team}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
})

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    backgroundColor: '#CCC',
    // margin: 10,
    width: 35,
    height: 35
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
});

module.exports = Sheet;