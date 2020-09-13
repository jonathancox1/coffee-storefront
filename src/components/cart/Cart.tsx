import React, { useState, useEffect } from 'react';

import trash from '../../assets/trash.svg';

import './Cart.scss';

interface ICartProps {
  clickedOpen: boolean;
  items: any;
  updateOpen: (val: boolean) => void;
  updateItems: (val: any) => void;
  goToCheckout: (val: boolean) => void;
}

export default function Cart({
  clickedOpen,
  updateOpen,
  items,
  updateItems,
  goToCheckout,
}: ICartProps) {
  const [isOpen, setOpen] = useState<boolean>(clickedOpen);

  useEffect(() => {
    setOpen(clickedOpen);
  }, [clickedOpen]);

  const closeCart = () => {
    setOpen(false);
    updateOpen(false);
  };

  const generateTotal = () => {
    let total = 0;
    items.forEach((item: any) => (total = total + item.price));
    return total;
  };

  const removeItem = (itemToRemove: string) => {
    // TODO update this
    const copy = [...items];
    copy.splice(copy.indexOf(itemToRemove), 1);
    updateItems(copy);
  };

  const checkOutFlow = () => {
    if (!items.length) {
      return;
    } else {
      // continue checkout
      goToCheckout(true);
      setOpen(false);
      updateOpen(false);
    }
  };

  return (
    <div className={`modalWrapper ${isOpen ? 'open' : 'closed'}`}>
      <div className="cartModal">
        <div className="cartHeader">
          Your Cart
          <button onClick={() => closeCart()} className="closeButton">
            X
          </button>
        </div>
        <div className="cartBody">
          {items.length > 0 ? (
            items.map((item: any) => {
              return (
                <>
                  <div className="cartItem">
                    <div
                      className="itemTrash"
                      onClick={() => removeItem(item.name)}
                    >
                      <img src={trash} alt="trashcan" />
                    </div>
                    <div className="itemName">1/2lb - {item.name}</div>
                    <div className="itemPrice">${item.price}</div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="cartEmpty">This cart is empty :(</div>
          )}
          <div className="cartTotal">
            <div className="totalText">Sub-total</div>
            <div className="totalNum">${generateTotal()}</div>
          </div>
        </div>
        <button
          className="checkoutButton"
          disabled={!items.length}
          onClick={() => checkOutFlow()}
        >
          Checkout!
        </button>
      </div>
    </div>
  );
}
