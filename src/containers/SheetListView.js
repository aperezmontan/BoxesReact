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
    this.props.loading ? toRender.push(<Loading key={2}/>) : toRender.push(<SheetList goToSheet={this.goToSheet} {...this.props} key={1}/>)
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
    backgroundColor: '#F5FCFF'
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
