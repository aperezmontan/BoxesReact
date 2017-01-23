import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from 'react-native';

export const Loading = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Dimensions.get('window').height/2
  },
});