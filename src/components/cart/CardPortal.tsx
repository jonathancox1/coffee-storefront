import React from 'react';
import ReactDOM from 'react-dom';

import '../offerings/CoffeeCardExtended.scss';

interface IPortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const cardRoot = document.getElementById('card-root')!;
  return ReactDOM.createPortal(
    <div className="cardPortal">{children}</div>,
    cardRoot,
  );
}
