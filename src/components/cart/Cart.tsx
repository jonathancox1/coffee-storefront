import React, { useState, useEffect } from 'react';

import trash from '../../assets/trash.svg';

import './Cart.scss';

interface ICartProps {
  clickedOpen: boolean;
  items: any;
  updateOpen: (val: boolean) => void;
}

export default function Cart({ clickedOpen, updateOpen, items }: ICartProps) {
  useEffect(() => {
    setOpen(clickedOpen);
  }, [clickedOpen]);
  const [isOpen, setOpen] = useState<boolean>(clickedOpen);
  const [cartTotal, setTotal] = useState<number>(0);

  const closeCart = () => {
    setOpen(false);
    updateOpen(false);
  };

  const generateTotal = () => {
    let total = 0;
    items.forEach((item: any) => (total = total + item.price));
    return total;
  };

  const removeItem = () => {
    // TODO update this
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
          {items.map((item: any) => {
            return (
              <>
                <div className="cartItem">
                  <div className="itemTrash" onClick={() => removeItem()}>
                    <img src={trash} alt="trashcan" />
                  </div>
                  <div className="itemName">{item.name}</div>
                  <div className="itemPrice">${item.price}</div>
                </div>
              </>
            );
          })}
          <div className="cartTotal">
            <div className="totalText">Total:</div>
            <div className="totalNum">${generateTotal()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
