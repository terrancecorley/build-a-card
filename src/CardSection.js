import React, { Component, Fragment } from 'react';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';
import pugImg from './assets/pug.jpg';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'fullName': 'Pug Williams',
      'jobTitle': 'CEO Pug Entertainment',
      'websiteURL': 'www.pugent.io',
      'phoneNumber': '(555) 555-5555',
      'userEmail': 'puggygee@example.com',
      'userAvatar': pugImg
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return(
      <section className="card-section">
        <UserInfo 
          handleFormChange={this.handleFormChange}/>
        <CardPreview 
          fullName={this.state.fullName}
          jobTitle={this.state.jobTitle}
          websiteURL={this.state.websiteURL}
          phoneNumber={this.state.phoneNumber}
          userEmail={this.state.userEmail}
          userAvatar={this.state.userAvatar}/>
      </section>
    );
  }
}

export default CardSection;