import React from 'react';
import './Card.css';

const Card = ({name, amount, id, removeItem}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{amount}</p>
      <button onClick={() => removeItem(id)}>DELETE</button>
    </div>
  )
}

export default Card;
