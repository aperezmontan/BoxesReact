import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});