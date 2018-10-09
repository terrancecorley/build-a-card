import React, { Component } from 'react';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';
import './css/CardSection.css';

function CardSection() {
  return(
    <section className="card-section">
      <UserInfo />
      <CardPreview />
    </section>
  );
}

export default CardSection;