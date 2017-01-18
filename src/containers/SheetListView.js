import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';

// get API functionality
import Api from '../api.js';

import { SheetList } from '../components/sheet-list-view'

export class _SheetListView extends Component {
  constructor() {
    super();
    this.state = {
      sheets: [{away_team: "", home_team: ""}]
    }
  }
  componentDidMount() {
    Api('sheets')
    .then((response) => {
      if(response){
        this.setState({
          response: response,
          sheets: response.sheets
        })
      }
    })
  }
  goToSheet(sheet){
    console.log("I'm going to ", this.state.sheets);
  }
  render() {
    return(
      <SheetList
        goToSheet={this.goToSheet}
        {...this.props}
      />
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  login(login) {
    dispatch({type: 'VIEW_SHEETS'})
  }
})

const mapStateToProps = (state) => ({
  sheets: state.sheets
})

export const SheetListView = connect(mapStateToProps, mapActionsToProps)(_SheetListView)
