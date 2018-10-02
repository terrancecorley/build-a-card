import React from 'react';
import './css/MainHeader.css';

function MainHeader(props) {
  return(
    <header className="site-header">
      <div className="site-logo__wrapper">
        <h1 className="site-logo">Build-A-Card</h1>
      </div>
    </header>
  );
}

export default MainHeader;