import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabView from 'react-native-scrollable-tab-view'
import { SheetListView, SheetNewView, AccountView } from '../containers';

export class _MainNav extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <TabView tabBarTextStyle={{fontFamily: 'Montserrat'}} tabBarPosition="overlayBottom">
        <SheetListView tabLabel="Sheet List" />
        <SheetNewView tabLabel="+" />
        <AccountView tabLabel="Account Info" />
      </TabView>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  fetchUser(loginInfo) {
    dispatch({type: 'FETCH_USER', payload: loginInfo})
  }
})

const mapStateToProps = (state) => ({ state: state })

export const MainNav = connect(mapStateToProps, mapActionsToProps)(_MainNav)
