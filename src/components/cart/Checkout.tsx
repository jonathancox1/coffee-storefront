import React, { useEffect, useState } from 'react';

import './Checkout.scss';

interface ICheckoutProps {
  clickedOpen: boolean;
  closeCheckout: (val: boolean) => void;
  items: {}[];
}

export default function Checkout({
  clickedOpen,
  closeCheckout,
  items,
}: ICheckoutProps) {
  const [total, setTotal] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [check, toggleCheck] = useState<boolean>(false);
  const [user, setUser] = useState({
    userName: false,
    venmo: false,
  });

  const goBack = () => {
    closeCheckout(false);
  };

  const generateSubTotal = () => {
    let tempTotal = 0;
    items.forEach((item: any) => (tempTotal = tempTotal + item.price));
    // setSubtotal(tempTotal);
    // generateTotal(tempTotal);
    return tempTotal;
  };

  const generateTotal = (subtotal: number) => {
    return subtotal + shipping;
  };

  const handleChange = (e: any) => {
    const itemToUpdate: any = e.target.name;
    setUser({ ...user, [itemToUpdate]: true });
  };

  return (
    <div className={`checkoutWrapper ${clickedOpen ? 'open' : 'closed'}`}>
      <div className="checkoutModal">
        <div className="checkoutHeader">
          <div className="checkoutTitle">Checkout</div>
          <button className="exitCheckout" onClick={() => goBack()}>
            X
          </button>
        </div>
        <div className="cartItemsWrapper">
          {items.length > 0 &&
            items.map((item: any) => {
              return (
                <>
                  {/* <div className="itemQuantity"></div> */}

                  <div className="itemName">{item.name}</div>
                  <div className="itemPrice">${item.price}</div>
                </>
              );
            })}

          <div className="subtotalText"></div>
          <div className="subtotal"></div>
          {/* <div className="totalText">Shipping</div>
          <div />
          <div className="calcTotal">${shipping}</div> */}
          <div className="totalText">Total</div>
          <div className="calcTotal">${generateSubTotal()}</div>
        </div>
        <div className="paymentDetails">
          <div className="paymentHeading">Payment Details</div>
          all payments are collected through Venmo only
          <br />
          send payment to the following:
          <br />
          @lazybonescoffeeco
          <form>
            <input
              type="text"
              name="userName"
              placeholder="enter your name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="venmo"
              placeholder="enter your venmo account name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="agreement"
              onClick={() => toggleCheck((check) => !check)}
              disabled={!user.userName || !user.venmo}
            />
            <label htmlFor="agreement">
              I have submitted and completed the venmo payment process
            </label>
          </form>
        </div>
        <button className="finalCheckout" disabled={!check}>
          Complete Order
        </button>
      </div>
    </div>
  );
}
