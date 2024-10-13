//NOTE: WORKS!!

import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
  }
})

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    /*
    this.inc = this.inc.bind(this) <-- could've bound here as well

    this.inc = () => {
      this.setState(prevState => ({
        coutn: prevState.count + 1,
      }))
    } <----- OR BIND HERE, VIA ANONYMOUS FUNCTION */
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1000)
    //if we don't specifically turn of increment, we risk having multiples
    //counters going on in the background. 
    //A big bug, which can cause a bigger app to crash
  }


  componentWillUnmount() {
    clearInterval(this.interval) //contains the memory leak
  }

  inc = () => { //the standard way to bind, easy to read
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count} </Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }

  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))

  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.appContainer}>
          <Button title="toggle" onPres={this
            .toggleCounter} />
          <Counter />
        </View>
      )
    } else {
      return (
        <Button title="toggle" onPress={this
        .toggleCounter} />
      )
    }
  }
}

/*
Unmount
o componentWillUnmount()
    - Gives a chance to clean up
        - Remove event listener
        - Invalidate network requests
        - Clear timeouts/intervals
o There are some bugs you can create if you're not careful

Writing React Native

Expo
o "The fastest way to build an app"
o Maintain a suite of tools to accelerate the app building process
    - i.e. Snack - which runs React Native in the browser
    - XDE - a GUI to serve, share, and publish your Expo projects
    - CLI - a command-line interface to serve, share, and publish projects
    - Client - an iPhone app that runs your projects on your phone while developing
    - SDK - bundles and exposes cross-platform libraries and APIs
*/