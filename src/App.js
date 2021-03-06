import './App.css';
import React, { Component } from 'react';
import CardContainer from './components/CardContainer.js';
import Form from './components/Form.js';
import apiCalls from './api.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount = () => {
    console.log(apiCalls.getItems())
    apiCalls.getItems()
    .then(data => {
      this.setState({ cards: data })
    })
  }

  addItem = (newItem) => {
    apiCalls.postItem(newItem)
    .then(data => {
      this.setState({ cards: [...this.state.cards, data ]})
    })
  }

  removeItem = (id) => {
    const filteredItems = this.state.cards.filter(card => card.id !== id);

    this.setState({ cards: filteredItems });
  }

  render() {
    return (
      <main className='App'>
        <h1>Grocery Store List</h1>
        <Form addItem={this.addItem} />
        {!this.state.cards && <p> No Groceries Added Yet. You must have a full pantry!</p>}
        <CardContainer cards={this.state.cards} removeItem={this.removeItem}/>
      </main>
    )
  }
}

export default App;
