import React from 'react';

import './CoffeeCardExtended.scss';

interface CardExtendedProps {
  moreInfo: (moreInfo: boolean) => void;
  addToCart: (item: {}) => void;
  coffeeInfo: any;
}

export default function CoffeeCardExtended({
  moreInfo,
  addToCart,
  coffeeInfo,
}: CardExtendedProps) {
  const { name, price, description, color, soldOut, comingSoon } = coffeeInfo;

  return (
    <div className="extendedCardPortal">
      <div className="extendedWrapper">
        <div className="card">
          <div className={`extendedCard ${color}`}>
            <div className="cardName">{name}</div>
            <button onClick={() => moreInfo(false)}>Close</button>
            <div className="cardPrice">${price}</div>
            <div className="cardDescription">{description}</div>
            <div
              className={`buttonBar ${soldOut && 'soldOut'} ${
                comingSoon && 'commingSoon'
              }`}
            >
              <button
                className={` ${soldOut && 'soldOut'} ${
                  comingSoon && 'comingSoon'
                }`}
                disabled={soldOut}
                onClick={() => addToCart(coffeeInfo)}
              >
                {soldOut ? (
                  <div className="sorry">Sold Out</div>
                ) : (
                  'add to cart'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
