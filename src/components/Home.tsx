import React, { useState, useEffect } from 'react';

import cart from '../assets/cart.svg';
import arrowup from '../assets/arrowup.svg';
import Cart from './cart/Cart';
import Coffees from './offerings/Coffees';
import Checkout from './cart/Checkout';
import Welcome from './Welcome';
import './Home.scss';
import Portal from './cart/Portal';
import CardPortal from './cart/CardPortal';
import NewShipping from './NewShipping';
import CoffeeCardExtended from './offerings/CoffeeCardExtended';

export default function Home() {
  const [cartStatus, setStatus] = useState<boolean>(false);
  const [checkoutStatus, setCheckout] = useState<boolean>(false);
  const [grow, toggleGrow] = useState<boolean>(false);
  const [currentItems, setItems] = useState<{}[]>([]);
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [moreInfo, setMoreInfo] = useState<boolean>(false);
  const [selectedCoffee, setSelectedCoffee] = useState<{}>({});

  const checkScrollToTop = () => {
    if (!showScroll && window.pageYOffset > 750) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 750) {
      setShowScroll(false);
    }
  };
  window.addEventListener('scroll', checkScrollToTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCard = () => {
    window.scrollTo({ top: 25, behavior: 'smooth' });
  };

  const openCart = () => {
    // show cart modal
    setStatus(true);
  };

  useEffect(() => {
    if (moreInfo) {
      scrollToCard();
    }
  }, [moreInfo]);

  const addToCart = (itemToAdd: {}) => {
    const updatedCart = [...currentItems, itemToAdd];
    setItems(updatedCart);
    toggleGrow(true);
    setTimeout(() => {
      toggleGrow(false);
    }, 400);
  };

  useEffect(() => {
    const coffeeVersion = '1.02';
    const local = localStorage.getItem('coffeeVersion');
    if (local !== coffeeVersion) {
      window.location.reload(true);
      localStorage.setItem('coffeeVersion', coffeeVersion);
    }
  }, []);

  return (
    <div className={`pageWrapper ${checkoutStatus && 'checkoutOpen'}`}>
      <div className="header">
        <div className="title">Lazy Bones</div>
        <div>
          <div className="count">{currentItems.length}</div>
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
        </div>

        <Cart
          clickedOpen={cartStatus}
          updateOpen={setStatus}
          items={currentItems}
          updateItems={setItems}
          goToCheckout={setCheckout}
        />
        {checkoutStatus && (
          <Portal>
            <Checkout
              clickedOpen={checkoutStatus}
              closeCheckout={setCheckout}
              items={currentItems}
            />
          </Portal>
        )}
      </div>
      <Welcome />
      <Coffees
        addToCart={addToCart}
        whichCoffee={setSelectedCoffee}
        moreInfo={setMoreInfo}
      />
      {moreInfo && (
        <CardPortal>
          <CoffeeCardExtended
            addToCart={addToCart}
            coffeeInfo={selectedCoffee}
            moreInfo={setMoreInfo}
          />
        </CardPortal>
      )}
      <div
        onClick={() => scrollTop()}
        className={`scrollToTop ${showScroll ? 'show' : 'hide'}`}
      >
        <img src={arrowup} alt="arrow up" />
      </div>
      <NewShipping />
    </div>
  );
}
