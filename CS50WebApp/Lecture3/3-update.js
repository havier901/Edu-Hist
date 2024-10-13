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

class CountEvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nexProps.count % 2) // aka return false, do not update
  }

  componentDidUpdate() {
    console.log(this.props.count) //only if the other function allowed it to update
  }

  render() {
    return(
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

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
        <CountEvenNumbers count={this.state.count} />
      </View>
    )
  }
}

/*
Update
o Just like in mounting process there are a ton of hooks/events that
    happen that we can possibly take advantage of
o componentWillReceiveProps(nextProps)
    -if you have something in your state that is really dependent
    on what the props are set to, you can pass in those props via this
    - do that by calling this.setState()
o shouldComponentUpdate(nextProps, nextState)
    - Compare changed values, return true if the component should rerender
        - if returned false, the update cycle terminates
        - Good for if you have a really complicated component that you don't
        want to update when a something smaller gets changed
        - Adds a lot of complication to your app; almost always a premature optimization
o render()
o componentDidUpdate(prevProps, prevState)
    o Do anything that isn't needed for UI (network requests, etc)
    o Basically the analog of componentDidMount()
*/