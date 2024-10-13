import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomCount from './count.js'

export default class App extends Component () {
  render () {
    return (
      <View style={styles.container}>
        <CustomCount count={0} />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
Expo
o The fastest way to build an app
o Suite of tools to accelerate the React Native development
  process
  - Snack - runs React native in the browser
  - CLI - a command-line interface to serve, share, and publish projects
  - ExpoGo - runs your projects on your phone while developing
  - SDK - bundles and exposes cross-platform libraries and APIs

Import/Export
o Components are great for simplifying code
o We can split components into their own files
  - Helps organize project
  - Export the component from the file
o Import that component before using it in a file
o Default vs named import/export
o Named Export
  - exporting a variable explicitly by using export in front of my instantiation
  - you can import/export multiple variables from a different file, must be named exactly
o Default Export
  - exports only one
  - can be named anything on the import end

PropTypes
o React can validate the types of component props at runtime
o Development tool that allows developers to ensure they're
passing correct props
  - Say you want to pass a value as a number but its accidentally getting
    passed as a string. PropTypes can help with that
  -React does this automatically in development mode
o Helps document your components' APIs
o Only runs in development mode
  - wont slow down your program in production mode

<Text>Hello, world</Text>
        <StatusBar style="auto" />
*/