import React, { useState } from 'react';

import exit from '../../assets/exit.svg';

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
  const [shipping, setShipping] = useState<boolean>(false);
  const [check, toggleCheck] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState({
    userName: false,
    venmo: false,
    email: '',
    phone: '',
    address: '',
    zipcode: '',
  });

  const goBack = () => {
    closeCheckout(false);
  };

  const generateSubTotal = () => {
    let tempTotal = 0;
    items.forEach((item: any) => (tempTotal = tempTotal + item.price));
    if (shipping) {
      tempTotal += 10;
    }
    return tempTotal;
  };

  const handleChange = (e: any) => {
    if (isValid()) {
      setError('');
    }
    const itemToUpdate: any = e.target.name;
    setUser({ ...user, [itemToUpdate]: e.target.value });
  };

  const isValid = () => {
    if (
      user.userName &&
      user.zipcode &&
      user.address &&
      user.email &&
      user.phone
    ) {
      toggleCheck(true);
      return true;
    } else {
      toggleCheck(false);
      return false;
    }
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const formatOrder = () => {
    return items.map((item: any) => {
      return `${item.name} - $${item.price} \r \n`;
    });
  };

  const emailTemplate = {
    name: `${user.userName}`,
    email: `${user.email}`,
    phone: `${user.phone}`,
    shipping: `${shipping}`,
    message: `${user.address} - ${
      user.zipcode
    } \r \n ${formatOrder().toString()} Total: $${generateSubTotal()}`,
  };

  const submitData = () => {
    if (!isValid()) {
      setError('Somethings missing :(');
      return;
    }
    console.log(emailTemplate);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...emailTemplate }),
    })
      .then(() => {
        // window.open(
        //   `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=cox%2ejonathan%40gmail%2ecom&lc=US&item_name=coffee%20time&amount=${generateSubTotal()}%2e00&currency_code=USD&button_subtype=services&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted`,
        // );

        window.location.assign(
          `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=T3MJURQ352E2C&lc=US&item_name=coffee&amount=${generateSubTotal()}&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted`,
        );
      })
      .catch((error) => console.log(error));
    // todo send to api
    // user data to api to generate order
  };

  return (
    <>
      <div className={`checkoutWrapper ${clickedOpen ? 'open' : 'closed'}`}>
        <div className="checkoutModal">
          <div className="checkoutHeader">
            <div className="checkoutTitle">Checkout</div>
            <button className="exitCheckout" onClick={() => goBack()}>
              <img src={exit} alt="exit checkout" />
            </button>
          </div>
          <div className="cartItemsWrapper">
            {items.length > 0 &&
              items.map((item: any) => {
                return (
                  <>
                    <div className="itemName">
                      <div className="weight">1/2 lb</div>
                      {item.name}
                    </div>
                    <div className="itemPrice">${item.price}</div>
                  </>
                );
              })}

            <div className="subtotalText">Shipping</div>
            <div className="subtotal">{shipping ? '$10' : '-'}</div>

            <div className="totalText">Total</div>
            <div className="calcTotal">${generateSubTotal()}</div>
          </div>
          <div className="paymentDetails">
            <div className="paymentHeading">Details</div>
            Payments are collected through PayPal
            <br />
            Contact Us with questions{' '}
            <a href="mailto:lazybonescoffee@gmail.com">here</a>
            <div className="shippingText">
              Now offering flat rate shipping
              <br />
              If you are outside of the <b>metro atlanta</b> area
              <br />
              please check the box for shipping
            </div>
            <br />
            <form data-netlify="true">
              <label>Name</label>
              <input
                type="text"
                name="userName"
                placeholder=""
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder=""
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder=""
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder=""
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Zip Code</label>
              <input
                type="text"
                name="zipcode"
                placeholder=""
                onChange={(e) => handleChange(e)}
                required
              />
              <label>$10 Shipping</label>
              <input
                type="checkbox"
                name="state"
                placeholder=""
                onChange={(e) => setShipping((current) => !current)}
                className="stateBox"
                required
              />
            </form>
            <div className="error">{error}</div>
          </div>
          <button
            className="finalCheckout"
            disabled={!check}
            type="submit"
            onClick={() => submitData()}
          >
            Continue to Paypal
          </button>
        </div>
      </div>
    </>
  );
}
