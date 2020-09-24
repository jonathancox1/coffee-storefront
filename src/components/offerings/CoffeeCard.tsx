import React, { useState } from 'react';

import './CoffeeCard.scss';

interface ICoffeeCardProps {
  addToCart: (item: object) => void;
  coffeeInfo: any;
  whichCoffee: (selectedCoffee: {}) => void;
  moreInfo: (moreInfo: boolean) => void;
}

export default function CoffeeCard({
  addToCart,
  coffeeInfo,
  whichCoffee,
  moreInfo,
}: ICoffeeCardProps) {
  const { name, price, description, color, soldOut, comingSoon } = coffeeInfo;
  const [isExtended, setExtended] = useState<boolean>(false);

  const callForMoreInfo = () => {
    setExtended((current) => !current);
    // whichCoffee(coffeeInfo);
    // moreInfo(true);
  };

  return (
    <div className={`card ${color}`}>
      <div className="card">
        <div className="cardName">{name}</div>
        <div className="cardPrice">${price}</div>
        <div className="cardDescription">{description}</div>
        <div className={`extraInfo ${isExtended && 'extend'}`}>
          <div>Country</div>
          <div>Colombia</div>
          <div>Region</div>
          <div>region</div>
          <div>Sub-Region</div>
          <div>sub-region</div>
          <div>Variety</div>
          <div>Caturra</div>
          <div>Process</div>
          <div>Natural</div>
          <div>Altitude</div>
          <div>1700-1900msl</div>
        </div>
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
          {!soldOut && (
            <button onClick={() => callForMoreInfo()}>more info</button>
          )}
        </div>
      </div>
    </div>
  );
}
