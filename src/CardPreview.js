import React, { Component } from 'react';
import pugImg from './assets/pug.jpg';

function CardPreview(props) {
  return(
    <div className="card-preview__wrapper">
      <h2>card preview</h2>
      <div>
        <div>
          <img src={pugImg} alt="" />
        </div>
        <div>
          <h3>CEO Pug Entertainment</h3>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default CardPreview;