import React from 'react';
import ReactDOM from 'react-dom';

import '../offerings/CoffeeCardExtended.scss';

interface IPortalProps {
  children: React.ReactNode;
  coords: any;
}

export default function Portal({ children, coords }: IPortalProps) {
  console.log(coords);
  const cardRoot = document.getElementById('card-root')!;
  return ReactDOM.createPortal(
    <div className="cardPortal">
      <div style={{ top: coords }}>{children}</div>
    </div>,
    cardRoot,
  );
}
