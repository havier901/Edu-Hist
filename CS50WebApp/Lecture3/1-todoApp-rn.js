/*
TODO APP with changes made for React Native
*/
import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'

let id = 0

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: 80 // Using 80 instead of Constants.statusBarHeight
  },
  fill: {
    flex: 1,
  }
})

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="delete" />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add TODO" />
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
/*
Previous Lecture
o React
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
o Its actually well regarded to leave style settings within a component
  - easy to read, and maintains the componentization of the program
  - However there are reasons as to why you would organizae style within
    its own object, instead of risking having to alter a hard coded choice
    somewhere down the line

Event Handling
o Unlike web, not every component has every interaction
o Only a few "touchable" components
  - Button
  - TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback
  - TouchableNatvieFeedback(Adroid only)
o Web handlers will receive the event as an argument, but React Native
  handlers often receive different arguments
  - Consult the documentation to learn

Components
o Return a node (something that can be rendered)
o Represent a discrete piece of the UI
o "All React components must act like pure functions
  with respect to their props"
o Two types of components:
  - Stateless Functional Component (SFC) a.k.a. "Pure Functional Component"
    - A function with no referece to state
  - React.Component

Stateless Functional Component (SFC)
o Simplest component: use when you don't need state
o A function that takes props and returns a node
  - Can't have side effects (setting values, pushing to an array, updating objects, etc)
o Any change in props will cause the function to be re-invoked

React.Component
o An abstract class that can be extended to behave however you want
o These have additional features that SFCs don't
  - Have instances
  - Maintain their own state
  - Have lifecycle methods (similar to hooks or event handlers) that are
    automatically invoked
o Rendering now becomes a function of props and class properties
  - i.e. we can use our classes functions as properties during our render just like regular props

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