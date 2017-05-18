import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, Modal, Navigator, Button } from 'react-native';

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
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>
            Main Menu
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button
            color='#ff8c00'
            onPress={() => this.navigate("Events")}
            title="Events"
        />
        <Button
            color='#ff8c00'
            onPress={() => this.navigate("Committee")}
            title="Committee"
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
  viewTitle: {
    flex: -1,
    width: 150,
    height: 50,
    paddingLeft: 5
  },
  menuButton: {
    paddingTop: 10,
    paddingBottom: 50,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#ff8c00'
  },
  textTitle: {
    color: "#ff8c00",
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 28,
    fontFamily: "Arial",
  }
});

module.exports = Home
/** export default Home */
