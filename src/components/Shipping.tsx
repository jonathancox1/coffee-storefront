import React, { useState } from 'react';
import shipping from '../assets/shipping.svg';

import './Shipping.scss';

export default function Shipping() {
  const [isInView, setInView] = useState<boolean>(false);

  const animateTruck = () => {
    if (!isInView && window.pageYOffset > 750) {
      setInView(true);
    } else if (isInView && window.pageYOffset <= 750) {
      setInView(false);
    }
  };
  // window.addEventListener('scroll', animateTruck);

  return (
    <div className="shippingWrapper">
      <div className="card">
        <div className="card">
          <div className="heading">Shipping</div>
          <div className="detail1">
            We're very happy to now offer flat rate shipping!!!
            <br />
            $10 anywhere in the US
            <br />
            <img
              src={shipping}
              alt="shipping icon"
              className={`${isInView ? 'animate' : 'dont'}`}
            />
          </div>
          <div className="detail2">
            Using USPS your coffee will arrive within two business days,
            ensuring its fresh and ready to drink
          </div>
        </div>
      </div>
    </div>
  );
}
