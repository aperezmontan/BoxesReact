import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';

// TODO: Attach Login and Signup buttons to proper functionality.  Just making it so hitting any button gets you past this screen right now

export const UserLoginForm = (props) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>BOXED IN</Text>
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('username', text)}
        placeholder='username'
        value={props.loginInfo.username}
      />
      <TextInput
        style={styles.sheetInput}
        onChangeText={(text) => props.handleChange('password', text)}
        placeholder='password'
        secureTextEntry={true}
        value={props.loginInfo.password}
      />
      <TouchableHighlight onPress={() => props.login()}>
        <Text style={styles.login}>
          Login
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.login()}>
        <Text style={styles.signUp}>
          Sign Up
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sheetInput: {
    height: (Dimensions.get('window').height - 54)/16, // 54 is the ios height
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 10,
    borderColor: 'gray',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    borderColor: 'black',
  },
  login: {
    fontSize: (Dimensions.get('window').height - 54)/20, // 54 is the ios height
    backgroundColor: 'mediumaquamarine',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    overflow: 'hidden',
    marginBottom: 10,
    padding: 5,
  },
  signUp: {
    fontSize: (Dimensions.get('window').height - 54)/20, // 54 is the ios height
    backgroundColor: 'steelblue',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    overflow: 'hidden',
    marginBottom: 10,
    padding: 5,
  },
  title: {
    color: '#FF5252',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: (Dimensions.get('window').height - 54)/10,
    padding: 10,
  }
});