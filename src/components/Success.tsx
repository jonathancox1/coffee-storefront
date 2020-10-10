import React from 'react';
import { Link } from 'react-router-dom';

import './Success.scss';

export default function Success() {
  return (
    <div className="successWrapper">
      <div className="thankYou">Thank You!</div>
      <br />
      We've received your payment and your transaction is complete.
      <br />
      You will receive an email from PayPal as your receipt.
      <br />
      <br />
      As a reminder, all orders are roasted on Sunday.
      <br />
      <Link to="/" className="returnLink">
        Return home
      </Link>
      <br />
      <span className="emoji" role="img" aria-label="emoji coffee">
        ☕
      </span>
    </div>
  );
}
