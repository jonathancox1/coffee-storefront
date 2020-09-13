import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
  const [check, toggleCheck] = useState<boolean>(false);
  const [user, setUser] = useState({
    userName: false,
    venmo: false,
    address: '',
    zipcode: '',
  });
  const history = useHistory();

  const goBack = () => {
    closeCheckout(false);
  };

  const generateSubTotal = () => {
    let tempTotal = 0;
    items.forEach((item: any) => (tempTotal = tempTotal + item.price));
    return tempTotal;
  };

  const handleChange = (e: any) => {
    const itemToUpdate: any = e.target.name;
    setUser({ ...user, [itemToUpdate]: e.target.value });
  };

  const submitData = () => {
    // todo send to api
    // user data to api to generate order
    history.push('/success');
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
                  <div className="itemName">{item.name}</div>
                  <div className="itemPrice">${item.price}</div>
                </>
              );
            })}

          <div className="subtotalText"></div>
          <div className="subtotal"></div>
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
              placeholder="name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="address"
              placeholder="street address"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="zipcode"
              placeholder="zipcode"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="venmo"
              placeholder="venmo account name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="agreement"
              onClick={() => toggleCheck((check) => !check)}
              disabled={
                !user.userName || !user.venmo || !user.address || !user.zipcode
              }
            />
            <label htmlFor="agreement">
              I have submitted and completed the venmo payment process
            </label>
          </form>
        </div>
        <button
          className="finalCheckout"
          disabled={!check}
          onClick={() => submitData()}
        >
          Complete Order
        </button>
      </div>
    </div>
  );
}
