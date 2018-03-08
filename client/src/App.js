import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends Component {
  state = { todos: [] }

  componentDidMount () {
    //TODO #index 
  }

  addItem = (name) => {
    const { todos } = this.state;
    const id = Math.floor(Math.random() * 1000)
    const todo = { name, id, complete: false }
    this.setState({ todos: [...todos, todo]})
  }


  updateTodo = (id) => {
    //TODO #update
  }


  deleteTodo = (id) => {
    //TODO #destroy 
  }


  render() {
    return (
      <div className="container">
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
