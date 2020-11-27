import React, { useState, useRef } from 'react';

import './CoffeeCard.scss';

interface ICoffeeCardProps {
  addToCart: (item: object) => void;
  coffeeInfo: any;
  whichCoffee: (selectedCoffee: {}) => void;
  moreInfo: (moreInfo: boolean) => void;
  coords: (coords: {}) => void;
}

export default function CoffeeCard({
  addToCart,
  coffeeInfo,
  whichCoffee,
  moreInfo,
  coords,
}: ICoffeeCardProps) {
  const {
    name,
    price,
    description,
    description1,
    description2,
    description3,
    coffee1,
    coffee2,
    coffee3,
    sub1,
    sub2,
    color,
    soldOut,
    comingSoon,
    country,
    sub,
    region,
    alt,
    variety,
    process,
    extra,
  } = coffeeInfo;
  const [isExtended, setExtended] = useState<boolean>(false);

  const test = useRef<HTMLDivElement>(null);

  const callForMoreInfo = () => {
    setExtended((current) => !current);
    // if (test.current) {
    //   const div = test.current.getBoundingClientRect();
    //   console.log(test.current);
    //   console.log(div.top);
    //   whichCoffee(coffeeInfo);
    //   moreInfo(true);
    //   coords(div.top);
    // }
  };

  return (
    <div className={`card ${color}`}>
      <div className="card" ref={test}>
        <div className="cardName">{name}</div>
        <div className="cardPrice">${price}</div>
        <div className="cardDescription">{description}</div>
        {description1 && (
          <>
            <div className="cardDescription">
              {sub1}
              <br />
              {sub2}
            </div>
            <div className="cardDescription">
              <b>{coffee1}</b>
              {description1}
            </div>
            <div className="cardDescription">
              <b>{coffee2}</b>
              {description2}
            </div>
            <div className="cardDescription">
              <b>{coffee3}</b>
              {description3}
            </div>
          </>
        )}
        <div className={`extraInfo ${isExtended && 'extend'}`}>
          <div className="table">
            <div>Country</div>
            <div>{country}</div>
            <div>Region</div>
            <div>{region}</div>
            {sub && (
              <>
                <div>Sub-Region</div>
                <div>{sub}</div>
              </>
            )}
            <div>Variety</div>
            <div>{variety}</div>
            <div>Process</div>
            <div>{process}</div>
            <div>Altitude</div>
            <div>{alt}</div>
          </div>
          <div className="para">{extra}</div>
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
