import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableHighlight, Button } from 'react-native';

export default class Splash extends Component {

  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:150, height: 150}} source={require('../images/logo.png')} />
        <Text style={styles.welcome}> </Text>
        <Text style={styles.welcome}>
          Welcome to HaCSApp!
        </Text>
        <Text style={styles.instructions}>
          The official app of the Hackathon and Computing Society at Birmingham City University
        </Text>
        <Button
          onPress={() => this.navigate('Home')}
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

/** export default Splash */
