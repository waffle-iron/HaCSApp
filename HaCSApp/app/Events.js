import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, Navigator } from 'react-native';

class Events extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          This is the Events Page.
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
    flex: 1,
    fontSize: 28,
    fontFamily: "Arial",
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  }
});

module.exports = Events
/** export default Home */
