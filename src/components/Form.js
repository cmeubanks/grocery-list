import React, { Component } from 'react';


class Form extends Component {
  contructor() {
    super();
    this.state = {
      name: '',
      amount: ''
    }
  }

  handleChange = (event) => {
    console.log(event)
    this.setState({ [event.target.name] = event.target.value});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='item'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='item'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
