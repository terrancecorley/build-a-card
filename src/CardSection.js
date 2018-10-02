import React, { Component } from 'react';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';
import './css/CardSection.css';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'fullName': '',
      'jobTitle': '',
      'websiteURL': '',
      'phoneNumber': '',
      'userEmail': '',
      'userAvatar': null,
      'avatarBackgroundColor': '#f4f250',
      'infoBackgroundColor': '#338855',
      'textColor': '#222222',
    };
    this.baseState = this.state;

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  handleFormChange(target) {
    if (target.name === 'userAvatar') {
      let file = target.files[0];
      let reader = new FileReader();
      
      reader.onload = () => {
        this.setState({
          [target.name]: reader.result
        });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({
        [target.name]: target.value
      });
    }
  }

  handleFormReset() {
    this.setState(this.baseState);
  }

  render() {
    return(
      <section className="card-section">
        <UserInfo 
          handleFormChange={this.handleFormChange}
          handleFormReset={this.handleFormReset}
          fullName={this.state.fullName}
          jobTitle={this.state.jobTitle}
          websiteURL={this.state.websiteURL}
          phoneNumber={this.state.phoneNumber}
          userEmail={this.state.userEmail}
          avatarBackgroundColor={this.state.avatarBackgroundColor}
          infoBackgroundColor={this.state.infoBackgroundColor}
          textColor={this.state.textColor}/>
        <CardPreview 
          fullName={this.state.fullName}
          jobTitle={this.state.jobTitle}
          websiteURL={this.state.websiteURL}
          phoneNumber={this.state.phoneNumber}
          userEmail={this.state.userEmail}
          userAvatar={this.state.userAvatar}
          avatarBackgroundColor={this.state.avatarBackgroundColor}
          infoBackgroundColor={this.state.infoBackgroundColor}
          textColor={this.state.textColor}/>
      </section>
    );
  }
}

export default CardSection;