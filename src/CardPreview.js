import React from 'react';
import pugImg from './assets/pug2.png';
import './css/CardPreview.css';

function CardPreview(props) {
  const cardPreviewHeader = {
    backgroundColor: props.avatarBackgroundColor
  };

  const cardPreviewBody = {
    backgroundColor: props.infoBackgroundColor,
    color: props.textColor
  };

  return(
    <div className="card-preview__wrapper">
      <h2>Card Preview</h2>
      <div className="card-preview" style={cardPreviewHeader}>
        <div className="card-preview__header">
          <img src={props.userAvatar || pugImg} alt="business card avatar" />
        </div>
        <div className="card-preview__body" style={cardPreviewBody}>
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