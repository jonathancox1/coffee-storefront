import React from 'react';

import shipping from '../assets/shipping.svg';
import contact from '../assets/contact.svg';
import coffee from '../assets/coffee.svg';

import './NewShipping.scss';

export default function NewShipping() {
  return (
    <div className="newShipWrap">
      <div className="textBox">
        <div className="headingMessage">
          We're very happy to now offer flat rate shipping!!!
          <br />
          $10 anywhere in the US
          <br />
          <img src={shipping} alt="shipping icon" />
        </div>
        <div className="subMessage">
          Using USPS your coffee will arrive within two business days, ensuring
          its fresh and ready to drink
        </div>
        <div className="secondaryMessage"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <div className="textBox">
        <div className="headingMessage">
          We're Roasting Weekly
          <br />
          <img src={coffee} alt="shipping icon" />
        </div>
        <div className="subMessage">
          We roast on Saturdays
          <br />
          All orders placed after Friday evening will be roasted the following
          week.
        </div>
        <div className="secondaryMessage"></div>
      </div>
      <hr />
      <br />
      <div className="textBox">
        <div className="headingMessage1">
          We love coffee and are happy to share our passion with you.
          <br />
          We work hard to source excellent coffee that is both unique and
          sustainable.
          <br />
          <img src={contact} alt="contact icon" />
        </div>
        <div className="subMessage">
          Reach out to us with any questions or feedback
          <br />
          <a href="mailto:lazybonescoffee@gmail.com">Contact Us</a>
        </div>
        <div className="secondaryMessage"></div>
      </div>
      <div className="waves"></div>
    </div>
  );
}
