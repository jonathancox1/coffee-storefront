import React from 'react';
import { Link } from 'react-router-dom';

import './Success.scss';

export default function Success() {
  return (
    <div className="successWrapper">
      <div className="thankYou">Thank You!</div>
      <br />
      We've received your order and will begin processing it soon.
      <br />
      As a reminder all coffees are roasted on Saturday
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
