import React from 'react'; 

class TodoForm extends React.Component {
  state = { title: ''}

  handleChange = (e) => {
    //let name = 'title'
    //this.state[name]
    const { name, value } = e.target 
    this.setState({ [name]: value })
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