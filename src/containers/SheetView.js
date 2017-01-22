import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchSheets, viewSheet } from '../actions/actions'

import { Sheet, Loading } from '../components/sheets-view'

export class _SheetView extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Sheet {...this.props} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

const mapStateToProps = (state) => {
  return {
    sheets: state.sheets
  }
}

export const SheetView = connect(mapStateToProps, null)(_SheetView)
