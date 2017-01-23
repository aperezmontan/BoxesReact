import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabView from 'react-native-scrollable-tab-view'
import { SheetListView, SheetNewView, AccountView } from '../containers';
import { SheetsNav, NewSheetNav } from '../navigators';

export class MainTabNav extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <TabView tabBarTextStyle={{fontFamily: 'Montserrat'}} tabBarPosition="overlayBottom">
        <SheetsNav tabLabel="Sheet List" />
        <NewSheetNav tabLabel="+" />
        <AccountView tabLabel="Account Info" />
      </TabView>
    )
  }
}
