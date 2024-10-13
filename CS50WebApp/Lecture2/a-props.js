import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = (props) => (
  <div style={styles}>
    <h2>{props.count}</h2>
  </div>
); //THIS IS A FUNCTION THAT WILL BE PASSED IN AS A PROP
// Above same as below, except above uses arrow notation shorthand
const App2 = function(props) {
  return (
    <div style={styles}>
      <h2>{props.count}</h2>
    </div>
  ) 
} //THIS IS ALSO A FUNCTION
let count = 0

render(<App2 count={count++} />, document.getElementById('root'));


