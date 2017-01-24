import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { SheetForm } from '../components/sheet-new-view'
import { Loading } from '../components/common'

export class _SheetFormView extends Component {
  constructor() {
    super();
    this.state = {
      newSheetInfo: {
        name: "",
        firstQtr: "",
        half: "",
        thirdQtr: "",
        final: "",
      },
    };
  }
  viewSheet(){
    this.navigator.push({
      // title: sheet.name,
      rightText: 'ALERT!',
    });
  }
  handleChange = (attribute, text) => {
    const newSheetInfo = this.props.newSheetInfo;
    newSheetInfo[attribute] = text;
    this.setState(newSheetInfo);
  }
  handleCreateSheet(){
    console.log("Sheet Created !!");
  }
  render() {
    return(
      <SheetForm
        handleChange={this.handleChange}
        handleCreateSheet={this.handleCreateSheet}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    games: state.games
  }
}

export const SheetFormView = connect(mapStateToProps, null)(_SheetFormView)
