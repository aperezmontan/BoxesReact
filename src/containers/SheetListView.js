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
import { fetchSheets } from '../actions/actions'

import { SheetList, Loading } from '../components/sheet-list-view'

export class _SheetListView extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchSheets();
  }
  goToSheet(sheet){
    console.log("I'm going to ", this.props.sheets);
  }
  render() {
    const loggedIn = this.props.loggedIn;
    var toRender = [];
    this.props.loading ? toRender.push(<Loading key={2}/>) : toRender.push(<SheetList goToSheet={this.goToSheet} {...this.props} key={1}/>)
    return(
        <View>
          {toRender}
        </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  fetchSheets() {
    dispatch(fetchSheets())
  }
})

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    sheets: state.sheets
  }
}

export const SheetListView = connect(mapStateToProps, mapActionsToProps)(_SheetListView)
