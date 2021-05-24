import React from 'react';

const Card = ({name, amount, id, removeItem}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{amount}</p>
      <button onClick={() => removeItem(id)}>DELETE</button>
    </div>
  )
}

export default Card;
