import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}; //THIS IS JUST A STYLE DICTIONARY

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,  // 1. notatating into this instance to grab the count and....
    }
  //this.increaseCount = this.increaseCount.bind(this) // here we could have bound our increase count function as well
  } //THIS IS OUR OBJECT THAT WE ARE ALTERING WITH OUR FUNCTION AND RENDERING ONTO OUR APP

  increaseCount() { //5. this function is bound to our app insance, setState is a method from the React.compaonent class we extended
    this.setState(prevState => ({count: prevState.count + 1})) // updater function
    this.setState(prevState => ({count: prevState.count + 1})) //6. Because the function changes the prev stat, asynch does not merge the two 
    console.log(this.state.count) // logs as 0 on this line because nothing has executed   // this.setState() instances, thus count increases by 2 in our html
  } //THIS IS A PROPERTY?
  // Using prevState as an argument in our this.setState() function avoids the merge 

  render() { //THIS IS A METHOD WITHIN THE INSTANCE OF OUR APP CLASS
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button> 
        </div>    
        <h2>{this.state.count}</h2>                                 
      </div>
    )                         // ^^^^ Is this where its being bound?  // 2. Displaying it on line 30, via the render fucntion
  }                           // Answer: Yes, using arrow notation  // 4. The button rendered activates the function on line 18...
}                             // which automatically binds this

render(<App />, document.getElementById('root'))

/*
State
o Adds internally-managed configuration for a component
o now components become classes
o `this.state` is a class property on the component instance
o Can only be updated by invoking `this.setState()`
    - Implemented in React.Component
        - which extends in order to have access to that method
    - setState() calls are batched and run asynchronously
    - Pass an object to be merged, or a function of previous state
o Changes in state also cause re-renders
*/