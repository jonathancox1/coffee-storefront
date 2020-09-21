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
  const { name, price, description, color, soldOut, comingSoon } = coffeeInfo;

  return (
    <div className={`card ${color}`}>
      <div className="card">
        <div className="cardName">{name}</div>
        <div className="cardPrice">${price}</div>
        <div className="cardDescription">{description}</div>
        <div
          className={`buttonBar ${soldOut && 'soldOut'} ${
            comingSoon && 'commingSoon'
          }`}
        >
          <button
            className={` ${soldOut && 'soldOut'} ${comingSoon && 'comingSoon'}`}
            disabled={soldOut}
            onClick={() => addToCart(coffeeInfo)}
          >
            {soldOut ? <div className="sorry">Sold Out</div> : 'add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
