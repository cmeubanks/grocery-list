import React from 'react';

const Card = ( {props} ) => {
  return (
    <div>
      <h2>{this.props.name}</h2>
      <p>{this.props.amount}</p>
    </div>
  )
}

export default Card;
