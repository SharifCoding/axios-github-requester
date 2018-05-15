import React, { Component } from 'react'
import './App.css'
// import axios into the file
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    // Add state to our component.
    // We’ll add a username attribute to it and set it as an empty string.
    this.state = {
      username: ''
    }
    // Let’s go ahead and bind handleClick to this.
    // First, we’ll need to create a constructor function in our component.
    // Then, we’ll bind handleClick to this inside of it.
    this.handleClick = this.handleClick.bind(this)
  }

  // Construct our request inside of the handleClick function.
  handleClick () {
    axios.get('https://api.github.com/users/sharifcoding')
      // Use .then to wait for the data to come back from Github, log the response.
      .then(response => this.setState({username: response.data.name}))
  }

  render () {
    return (
      <div className='button__container'>
        {/* When the button is clicked, we will call a function called handleClick that is bound to this */}
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App