import React, { useState } from 'react';

import cart from '../assets/cart.svg';
import Cart from './cart/Cart';

import './Home.scss';

export default function Home() {
  const [cartStatus, setStatus] = useState<boolean>(false);
  const openCart = () => {
    // show cart modal
    setStatus(true);
  };

  const currentItems = [
    {
      name: 'Guatemala Finca Moopy',
      price: 13,
    },
    {
      name: 'Ethiopia Guji Bomba',
      price: 14,
    },
  ];
  return (
    <div className="pageWrapper">
      <div className="header">
        <div className="title">Coffee Company</div>
        <button
          onClick={() => openCart()}
          className={`button ${!cartStatus ? 'showButton' : 'hideButton'}`}
        >
          <img className="cartImage" src={cart} alt="shopping cart" />
        </button>
        <Cart
          clickedOpen={cartStatus}
          updateOpen={setStatus}
          items={currentItems}
        />
      </div>
    </div>
  );
}
