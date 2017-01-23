import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchGames, newSheetForm } from '../actions/actions'

import { GamesList } from '../components/sheet-new-view'
import { Loading } from '../components/common'

export class _SheetNewView extends Component {
  constructor() {
    super();
  }
  componentDidMount(){
    console.log("Make this API call");
    // this.props.fetchGames();
  }
  newSheet(game){
    this.newSheetForm(game);
    this.navigator.push({
      title: 'createSheet',
      rightText: 'ALERT!',
    });
  }
  render() {
    const loggedIn = this.props.loggedIn;
    var toRender = [];
    this.props.loading ? toRender.push(<Loading key={2}/>) : toRender.push(<GamesList newSheet={this.newSheet} {...this.props} key={1}/>)
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
  fetchGames() {
    dispatch(fetchGames())
  },
  newSheetForm(game) {
    dispatch(newSheetForm(game))
  }
})

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    games: state.games
  }
}

export const SheetNewView = connect(mapStateToProps, mapActionsToProps)(_SheetNewView)
