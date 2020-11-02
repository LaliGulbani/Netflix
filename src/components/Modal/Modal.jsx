import React, { Children } from 'react';

import './modal.css';

//{ isShow, children }
export const Modal = ({ isShow, children }) => {
  return (
    <div className={`modalContainer ${isShow ? 'modalContainerShow' : ''}`}>
      <div className="modalContent">{children}</div>
    </div>
  );
};
