import React from 'react';

import './searchPanel.css';

export const SearchPanel = () => {
  return (
    <div className="searchPanel_container">
      <span className="searchPanel_title">Find your movie</span>
      <div className="searchPanel_inputContainer">
        <input
          className="searchPanel_inputMovia"
          placeholder="What do you want to watch?"
        ></input>
        <button className="searchPanel_buttonSearch">Search</button>
      </div>
    </div>
  );
};
