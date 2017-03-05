/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight, Button } from 'react-native';
import Splash from './app/Splash'
import Home from './app/Home'
import Events from './app/Events'

export default class HaCSApp extends Component {

  constructor() {
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    if(route.name === 'Splash') {
      return <Splash navigator={navigator} />
    } else if(route.name === 'Home') {
      return <Home navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Splash'}}
        renderScene={this.renderScene}
      />
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
