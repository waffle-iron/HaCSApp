import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, Navigator } from 'react-native';

class Home extends Component {
  static get defaultProps() {
    return {
      title: 'Home',
      id: 'Home'
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.largeText}>
          This is the Home Page.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: "Arial",
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  }
});

module.exports = Home
