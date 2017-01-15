import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { Provider } from 'react-redux';

// Get components from other files
import Game from './utilities/game.js'
import Home from './utilities/home.js'
import Sheet from './utilities/sheet.js'
import { store } from './utilities/store';

var BoxesReact = React.createClass({
  configureScene(route, routeStack){
   return Navigator.SceneConfigs.FloatFromRight
  },

  renderScene(route, navigator){
    console.log(route.title);
    switch(route.title){
    case 'listGames':
      return <Game navigator={navigator} route={route} {...route.passProps} />;
    case 'home':
      return <Home navigator={navigator} route={route} {...route.passProps} />;
    case 'createSheet':
    case 'listSheets':
    default:
      return (
        <Sheet navigator={navigator} route={route} {...route.passProps} />
      )
    }
  },

  border(color){
    return {
      borderColor: color,
      borderWidth: 1,
    }
  },

  render() {
    var windowHeight = Dimensions.get('window').height;
    var navBarHomeTitle = windowHeight/15;
    var navBarSheetTitle = windowHeight/24;
    var navBarTitle = windowHeight/20;
    var navBarBack = windowHeight/18;
    var navBarDone = windowHeight/18;

    return (
      <Provider store={store}>
        <Navigator
          configureScene={ this.configureScene }
          initialRoute={{ title: 'home'}}
          renderScene={ this.renderScene }
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                  {
                    if (route.title === 'home') {
                      return null;
                    } else {
                      return (
                        <TouchableHighlight onPress={() => navigator.pop()}>
                          <Text style={[styles.navBarTitle, {fontSize: navBarTitle}, this.border('white')]}>Back</Text>
                        </TouchableHighlight>
                      );
                    }
                  },
                // THIS IS WHERE YOU WOULD CONFIGURE THE RIGHT BUTTON IN THE NAV BAR
                RightButton: (route, navigator, index, navState) =>
                  {
                    if (route.title === 'createSheet') {
                      return (
                        <TouchableHighlight onPress={() => this.handleCreateSheet}>
                          <Text style={[styles.navBarTitle, {fontSize: navBarTitle}, this.border('white')]}>Done</Text>
                        </TouchableHighlight>
                      );
                    } else {
                      return null;
                    }
                  },
                //   { return (<Text style={{fontFamily: 'Futura-CondensedExtraBold'}}>Done</Text>); },
                Title: (route, navigator, index, navState) =>
                  {
                    if (route.title === 'createSheet'){
                      return (<Text style={[styles.navBarTitle, styles.navBarText, {fontSize: navBarTitle}]}>CREATE SHEET</Text>);
                    } else if (route.title === 'home') {
                      return (<Text style={[styles.navBarTitle, styles.navBarText, {fontSize: navBarTitle}]}>BOXED IN</Text>);
                    } else if (route.title === 'listGames') {
                      return (<Text style={[styles.navBarTitle, styles.navBarText, {fontSize: navBarTitle}]}>GAME LIST</Text>);
                    } else if (route.title === 'listSheets') {
                      return (<Text style={[styles.navBarTitle, styles.navBarText, {fontSize: navBarTitle}]}>SHEET LIST</Text>);
                    } else {
                      return (<Text style={[styles.navBarSheetTitle, {fontSize: navBarSheetTitle}, this.border('white')]}>{route.title}</Text>);
                    }
                  }
              }}
              style={{backgroundColor: '#3c3c3c', borderBottomWidth: .5, borderBottomColor: 'black'}}
            />
          }
        />
      </Provider>
    );

  },
})

const styles = StyleSheet.create({
  item: {
      backgroundColor: '#CCC',
      margin: 10,
      width: 100,
      height: 100
  },
  list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  navBarTitle: {
    flex: 1,
    fontFamily: 'Montserrat',
    flexDirection: 'row',
  },
  navBarText: {
    // alignItems: 'center',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  navBarSheetTitle: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    fontFamily: 'Montserrat',
    justifyContent: 'center',
    flexDirection: 'row',
  }
})

AppRegistry.registerComponent('BoxesReact', () => BoxesReact);
