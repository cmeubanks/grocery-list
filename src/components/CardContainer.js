import React from 'react';
import Card from './Card.js';
import './CardContainer.css';

const CardContainer = ({cards, removeItem}) => {
  const cardDetails = cards.map(card => {
    return (
      <Card
        name={card.name}
        amount={card.amount}
        id={card.id}
        key={card.id}
        removeItem={removeItem}
      />
    )
  })
  return (
    <div className='card-container'>
      {cardDetails}
    </div>
  )
}

export default CardContainer;
