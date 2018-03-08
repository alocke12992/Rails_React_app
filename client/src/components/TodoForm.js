import React from 'react'; 

class TodoForm extends React.Component {
  state = { title: ''}

  handleChange = (e) => {

  }

  handleSubmit = (e) => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input 
          placeHolder="Add A Todo"
          required 
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        /> 
      </form>
    )
  }
}

export default TodoForm 