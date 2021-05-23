import React from 'react';
import Card from './Card.js';

const CardContainer = (props) => {
  const cardDetails = props.cards.map(card => {
    return (
      <Card
        name={card.name}
        amount={card.amount}
        key={card.id}
      />
    )
  })
  return (
    <div>
      {cardDetails}
    </div>
  )
}

export default CardContainer;
