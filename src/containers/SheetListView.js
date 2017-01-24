import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchSheets, viewSheet } from '../actions/actions'

import { SheetList } from '../components/sheets-view'
import { Loading } from '../components/common'

export class _SheetListView extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchSheets();
  }
  goToSheet(sheet){
    this.navigator.push({
      title: sheet.name,
      rightText: 'ALERT!',
    });
  }
  render() {
    const loggedIn = this.props.loggedIn;
    var toRender = [];
    var sheetRows = [];
    if(this.props.sheets.length > 0){
      this.props.sheets.forEach(function(sheet){
        sheetRows.push(<SheetList sheet={sheet} key={sheet.id} goToSheet={this.goToSheet} {...this.props} />);
      }.bind(this));
    }
    this.props.loading ? toRender.push(<Loading key={1}/>) : toRender.push(sheetRows)
    return(
      <View style={styles.container}>
        {toRender}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  }
})

const mapActionsToProps = (dispatch) => ({
  fetchSheets() {
    dispatch(fetchSheets())
  },
  viewSheet(){
    dispatch(viewSheet())
  }
})

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    sheets: state.sheets
  }
}

export const SheetListView = connect(mapStateToProps, mapActionsToProps)(_SheetListView)
