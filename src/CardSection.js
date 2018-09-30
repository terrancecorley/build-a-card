import React, { Component, Fragment } from 'react';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';

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
      'textColor': '#333333',
      'backgroundColor': '#f4f250'
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
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}/>
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