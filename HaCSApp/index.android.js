/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class HaCSApp extends Component {
  static get defaultProps() {
    return {
      title: 'SplashScreen'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:150, height: 150}} source={require('./images/logo.png')} />
        <Text style={styles.welcome}> </Text>
        <Text style={styles.welcome}>
          Welcome to HaCSApp!
        </Text>
        <Text style={styles.instructions}>
          The official app of the Hackathon and Computing Society at Birmingham City University
        </Text>
        <Text style={{color: '#f8f8ff', textAlign: 'center'}} /** onPress={(onContinuePress)} */ >
          Continue
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HaCSApp', () => HaCSApp);
