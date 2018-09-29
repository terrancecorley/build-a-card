import React from 'react';
import pugImg from './assets/pug.jpg';

function CardPreview(props) {

  return(
    <div className="card-preview__wrapper">
      <h2>Card Preview</h2>
      <div className="card-preview">
        <div className="card-preview__header">
          <img src={props.userAvatar || pugImg} alt="business card avatar" />
        </div>
        <div className="card-preview__body">
          <h3>{props.jobTitle || 'CEO Pug Entertainment'}</h3>
          <div>
            <span>{props.fullName || 'Pug Williams'}</span>
            <span>{props.websiteURL || 'www.pugent.io'}</span>
          </div>
          <div>
            <span>{props.phoneNumber || '(555) 555-5555'}</span>
            <span>{props.userEmail || 'puggygee@example.com'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;