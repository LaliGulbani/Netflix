import React from 'react';

import SearchPanel from '../SearchPanel';
import Logo from '../Logo';

import './header.css';

export const Header = () => {
  return (
    <header className="header_container">
      <div className="header_firstSection">
        <Logo />
        <button className="add_button">+ Add movie</button>
      </div>

      <SearchPanel />
    </header>
  );
};
