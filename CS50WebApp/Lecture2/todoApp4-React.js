import React from 'react';
import { render } from 'react-dom';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.check} onChange={props.onToggle}/>
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      todos: [
        ...this.state.todos,          //... pulls out all the values of an array and puts it in a new array, this keeps us on par
         {id: id++, text: text, checked: false},  // with React protocol to not mutate, but replace
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id){
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
      <div>
        <div>
          <div>Todo count: {this.state.todos.length}</div>
          <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
          <button onClick={() => this.addTodo()}>Add TODO</button>
          <ul>
            {this.state.todos.map(todo => (
              <Todo
                onToggle={() => this.toggleTodo(todo.id)} 
                onDelete={() => this.removeTodo(todo.id)}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

/*
Without the constant need to check our step-by-step logic, which is more imperative,
we have an app that's easier to read/code/run based on the given state of the app

But why limit React to just web???

REACT NATIVE
o A framework that relies on React core, but doesn't limit itself to web
o Allows us to build mobile apps using only JavaScript
    - "Learn once, write anywhere"
o Supporst both iOS and Adroid
*/