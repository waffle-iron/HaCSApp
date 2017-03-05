import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, Button } from 'react-native';

export default class Home extends Component {

  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Main Menu
        </Text>
        <Button
          onPress={() => this.navigate('Events')}
          color="#ff8c00"
          title="Events"
        />
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

module.exports = Home
/** export default Home */
