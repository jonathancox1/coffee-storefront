import React from 'react';

import contact from '../assets/contact.svg';

import './About.scss';

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="card">
        <div className="card">
          <div className="heading">About</div>
          <div className="detail1">
            We love coffee and are happy to share our passion with you. We work
            hard to source excellent coffee that is both unique and sustainable.
            <br />
            <img src={contact} alt="contact icon" />
          </div>
          <div className="detail2">
            Reach out to us with any questions or feedback
            <br />
            <a href="mailto:lazybonescoffee@gmail.com">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
