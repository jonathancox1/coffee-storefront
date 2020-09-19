import React from 'react';

import './CoffeeCard.scss';

interface ICoffeeCardProps {
  addToCart: (item: object) => void;
  coffeeInfo: any;
}

export default function CoffeeCard({
  addToCart,
  coffeeInfo,
}: ICoffeeCardProps) {
  const { name, price, description, color } = coffeeInfo;

  return (
    <div className={`card ${color}`}>
      <div className="card">
        <div className="cardName">{name}</div>
        <div className="cardPrice">${price}</div>
        <div className="cardDescription">{description}</div>
        <div className="buttonBar">
          <button onClick={() => addToCart(coffeeInfo)}>add to cart</button>
        </div>
      </div>
    </div>
  );
}
