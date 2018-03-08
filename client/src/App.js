import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Nav from './components/Nav';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    //TODO #index
  }

  addItem = (name) => {
    let item = { name }
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
      .then( todo => {
        const { todos } = this.state;
        this.setState({ todos: [...todos, todo] })
      })
  }

  updateTodo = (id) => {
    let todos = this.state.todos.map( t => {
      if (t.id === id)
        return { ...t, complete: !t.complete }
      return t
    })

    this.setState({ todos })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    this.setState({ 
      todos: todos.filter( t => t.id !== id ) 
    })
  }


  render() {
    return (
      <div className="container">
        <Nav />
        <TodoForm addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;