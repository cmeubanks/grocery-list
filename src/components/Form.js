import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({name: '', amount: ''});
  }

  submitItem = event => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      ...this.state
    }
    this.props.addItem(newItem);
    this.clearInputs();
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
          placeholder='amount'
          name='amount'
          value={this.state.amount}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitItem(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
