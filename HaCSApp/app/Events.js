import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, Navigator } from 'react-native';

class Events extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Upcoming Events
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
  title: {
    color: "#ff8c00",
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 28,
    fontFamily: "Arial",
  }
});

module.exports = Events
/** export default Home */
