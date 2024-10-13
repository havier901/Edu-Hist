import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    count: 0,
  }

  // EDIT: this wasn't in the original lecture code, but it makes it more obvious
  // that the JS thread gets locked
  componentDidMount() {
    setInterval(() => this.setState(prevState => ({count: prevState.count + 1})), 500)
  }
  
  blockJS() {
    console.log('blocking')
    const end = Date.now() + 5000
    while (Date.now() < end) {}
    console.log('unblocked')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Button title="block js thread" onPress={this.blockJS} />
        <Text style={styles.paragraph}>
          {this.state.count}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight, // used a number instead
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

/*
Previous Lecture
o react
o Classes
o React
o Imperative vs Declarative Programming
o Props
o State
o todoApp.js
o React Native

React Native
o A framework that relies on React core
o Allows us to build mobile apps using only JavaScript
    -"Learn once, write everywhere"
o Supports iOS and Android

How does React Native work?
o JavaScript is bundled
    - Transpiled and minified
o Seperate threads for UI layout and JavaScript
o Threads Communicate asynchronously through a "bridge"
    - JS thread will request UI elements to be shown
    - JS thread can be blocked, or held up, and UI will still work
o The bridge is asynchronous

Differences between RN and Web
o Base components
    - Things like ScrollView, Button don't exist in web
o Style, or the way you style is slightly different
o No browser APIs
    o CSS animations, Canvas, SVG, etc.
    o Some have been polyfilled (fetch, timers, console, etc.)
    o polyfill - adapting methods/functions so that they are
    available in all environments
o Navigation
    - Future Leture**

React Native Components
o Not globally in scope like React web components
    - things like <div>, <span>, etc cannot be accessed/declared globally
    - we have to import from 'react-native' library
o <div> no longer exist ----> View
    - View is a cross-platform, blank UI slate
o <span>, <p> ----> Text
    - All text must be wrapped by a <Text /> tag
o button ---> Button
    - instead of onClick, its onPress
o ScrollView
    - Replaces <ul> and <li> because scrolling can be just as long as list
o Exlplore the Documentation for more components, its really good

Style
o React Native uses JS objects for styling
    - does not have CSS
o Object keys are based on CSS properties
    - margin-top, margin-bottom, margin, padding, etc
o Flexbox layout (a web development concept)
    - Default to column layout, instead of row, like in web
o Lengths are in unitless numbers
o style prop can take an array of styles
o StyleSheet.create()
  - Optimizes how you send your style properties over the bridge
  - Functionally the same thing as creating objects for style
  - Additional optimization: only sends IDs over the bridge
  - Must import StyleSheet   

*/