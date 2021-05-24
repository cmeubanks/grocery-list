import './App.css';
import React, { Component } from 'react';
import CardContainer from './components/CardContainer.js';
import Form from './components/Form.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { id: 1, name: 'Apple Pie', amount: '2 pie crusts' },
        { id: 2, name: 'Lime', amount: '3' },
        { id: 3, name: 'Cheese', description: '5 blocks' }
      ]
    }
  }

  addItem = (newItem) => {
    this.setState({ cards: [...this.state.cards, newItem ]})
  }

  render() {
    return (
      <main>
        <h1>Grocery Store List</h1>
        <Form addItem={this.addItem}/>
        {!this.state.cards && <p> No Groceries Added Yet. You must have a full pantry!</p>}
        <CardContainer cards={this.state.cards} />
      </main>
    )
  }
}

export default App;
