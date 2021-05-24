import React from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.amount}</p>
      <button onClick={() => props.removeItem(props.id)}>DELETE</button>
    </div>
  )
}

export default Card;
