import React from 'react';

function CardPreview(props) {

  // TODO: figure out how to display avatar img

  return(
    <div className="card-preview__wrapper">
      <h2>Card Preview</h2>
      <div className="card-preview">
        <div className="card-preview__header">
          <img src={props.userAvatar} alt="business card avatar" />
        </div>
        <div className="card-preview__body">
          <h3>{props.jobTitle}</h3>
          <div>
            <span>{props.fullName}</span>
            <span>{props.websiteURL}</span>
          </div>
          <div>
            <span>{props.phoneNumber}</span>
            <span>{props.userEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;