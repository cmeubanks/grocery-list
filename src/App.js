import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards = [];
    }
  }

  render() {
    return (
      <h1>Grocery Store List</h1>
      <Form />
      <CardContainer />
    )
  }
}

export default App;
