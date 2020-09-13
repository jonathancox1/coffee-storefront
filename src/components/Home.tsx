import React, { useState } from 'react';

import cart from '../assets/cart.svg';
import Cart from './cart/Cart';
import Coffees from './offerings/Coffees';
import Checkout from './cart/Checkout';

import './Home.scss';

export default function Home() {
  const [cartStatus, setStatus] = useState<boolean>(false);
  const [checkoutStatus, setCheckout] = useState<boolean>(false);
  const [grow, toggleGrow] = useState<boolean>(false);
  const [currentItems, setItems] = useState<{}[]>([]);

  const openCart = () => {
    // show cart modal
    setStatus(true);
  };

  const openCheckout = () => {
    setCheckout(true);
  };

  const addToCart = (itemToAdd: {}) => {
    const updatedCart = [...currentItems, itemToAdd];
    setItems(updatedCart);
    toggleGrow(true);
    setTimeout(() => {
      toggleGrow(false);
    }, 1000);
  };

  return (
    <div className={`pageWrapper ${checkoutStatus && 'checkoutOpen'}`}>
      <div className="header">
        <div className="title">Coffee Company</div>
        <button
          onClick={() => openCart()}
          className={`button ${!cartStatus ? 'showButton' : 'hideButton'}`}
        >
          <img
            className={`cartImage ${grow && 'grow'}`}
            src={cart}
            alt="shopping cart"
          />
        </button>
        <Cart
          clickedOpen={cartStatus}
          updateOpen={setStatus}
          items={currentItems}
          updateItems={setItems}
          goToCheckout={setCheckout}
        />
        <Checkout
          clickedOpen={checkoutStatus}
          closeCheckout={setCheckout}
          items={currentItems}
        />
      </div>
      <Coffees addToCart={addToCart} />
    </div>
  );
}
