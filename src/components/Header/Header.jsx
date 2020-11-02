import React, { useState } from 'react';

import SearchPanel from '../SearchPanel';
import Logo from '../Logo';
import Modal from '../Modal';

import './header.css';

export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal isShow={show}>
        <div className="addModal">
          <div className="close" />
          <h1 className="addMovieLabel">ADD MOVIE</h1>

          <span>Lali</span>
        </div>
      </Modal>
      <header className="header_container">
        <div className="header_firstSection">
          <Logo />
          <button className="add_button" onClick={() => setShow(true)}>
            + Add movie
          </button>
        </div>

        <SearchPanel />
      </header>
    </>
  );
};
