import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.amount}</p>
    </div>
  )
}

export default Card;
