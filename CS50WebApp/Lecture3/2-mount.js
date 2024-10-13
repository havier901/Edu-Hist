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

export default class App extends React.Component {
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
    setInterval(this.inc, 1000)
  }

  inc = () => { //the standard way to bind, easy to read
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    )
  }
}

/*
Component Lifecycle
MOUNT--------->UPDATE------->UNMOUNT
o First mount is when its originally instantiated
o Updates whenever we receive new props or the state changes
o Unmount is when its time for the component to disappear
  - A chance to clean up whatever you may have created

Mount
o constructor(props)
  - initialize state or other class properties (bound methods, etc)
o render()
  - the meat of a component, i.e. showing the UI
  - Return a node
o componentDidMount() 
  - A kind of "hook" or event handler/status check
  - A chance to do anything that isn't needed for UI (async actions, timbers, etc)
  - Setting state here will cause a re-render before updating the UI
*/