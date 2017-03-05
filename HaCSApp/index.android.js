/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight, Button } from 'react-native';

var Home = require('./app/Home');
var Splash = require('./app/Splash');

class NavigatorRoutes extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{
          id: 'Splash'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch (route.id){
      case 'Splash':
        return(<Splash navigator={navigator} title="Splash" />);
      case 'Home':
        return(<Home navigator={navigator} title="Home" />);
    }
  }

}

/** import Splash from './splash.android'; */

export default class HaCSApp extends Component {

  onButtonPress(){
    this.props.navigator.push({ id: 'Home' });
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
        <Text> </Text>
        <Button
          onPress={this.onButtonPress.bind(this)}
          title="Continue"
          color="#ff8c00"
        />
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
