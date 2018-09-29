import React, { Component, Fragment } from 'react';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section className="card-section">
        <UserInfo />
        <CardPreview />
      </section>
    );
  }
}

export default CardSection;