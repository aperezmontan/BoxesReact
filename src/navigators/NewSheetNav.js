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
import { connect } from 'react-redux';

import { Loading, SheetList, Sheet } from '../components/sheets-view'
import { SheetListView } from '../containers'

export class SheetsNav extends Component{
  configureScene(route, routeStack){
    return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene(route, navigator){
    console.log(route.title);
    switch(route.title){
      case 'listSheets':
        return <SheetListView navigator={navigator} route={route} {...route.passProps} {...this.props}/>;
      default:
        return <Sheet navigator={navigator} route={route} {...route.passProps} />;
    }
  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 1,
    }
  }

  render() {
    var windowHeight = Dimensions.get('window').height;
    var navBarHomeTitle = windowHeight/15;
    var navBarSheetTitle = windowHeight/24;
    var navBarTitle = windowHeight/20;
    var navBarBack = windowHeight/18;
    var navBarDone = windowHeight/18;

    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute={{ title: 'listSheets'}}
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                {
                  if (route.title === 'listSheets') {
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
                  if (route.title === 'listSheets') {
                    return (<Text style={[styles.navBarTitle, styles.navBarText, {fontSize: navBarTitle}]}>BOXED IN</Text>);
                  } else {
                    return (<Text style={[styles.navBarSheetTitle, {fontSize: navBarSheetTitle}, this.border('white')]}>{route.title}</Text>);
                  }
                }
            }}
            style={{backgroundColor: '#3c3c3c', borderBottomWidth: .5, borderBottomColor: 'black'}}
          />
        }
      />
    );
  }
}

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
