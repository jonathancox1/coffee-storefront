import React from 'react';
import ReactDOM from 'react-dom';

import './Checkout.scss';

interface IPortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const modalRoot = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <div className="portal">{children}</div>,
    modalRoot,
  );
}
