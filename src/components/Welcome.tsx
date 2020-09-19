import React from 'react';

import arrowdown from '../assets/arrowdown.svg';

import './Welcome.scss';

export default function Welcome() {
  const windowScroll = () => {
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  return (
    <div className="welcomeWrap">
      <div className="textBox">
        <div className="headingMessage">
          Hey from us at lazybones
          <br />☕{' '}
        </div>
        <div className="subMessage">
          we're roasting weekly to ensure the freshest coffee is brought to you
        </div>
        <div className="secondaryMessage"></div>
        <div className="arrow" onClick={() => windowScroll()}>
          <img className={'arrowDown'} src={arrowdown} alt="arrow down" />
        </div>
      </div>
      <div className="waves"></div>
    </div>
  );
}
