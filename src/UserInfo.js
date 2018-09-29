import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.handleFormChange(e.target);
  }

  render() {
    return(
      <div className="user-info__wrapper">
        <h2>Enter Your Information</h2>
        <form action="POST" onChange={this.onChange}>
          <input type="text" aria-label="full name" name="fullName" placeholder="Full Name" value={this.props.fullName}/>
          <input type="text" aria-label="job title" name="jobTitle" placeholder="Job Title" value={this.props.jobTitle}/>
          <input type="url" aria-label="website url" name="websiteURL" placeholder="Webiste URL" value={this.props.websiteURL}/>
          <input type="phone" aria-label="phone number" name="phoneNumber" placeholder="Phone Number" value={this.props.phoneNumber}/>
          <input type="email" aria-label="email" name="userEmail" placeholder="Email" value={this.props.userEmail}/>
          <input type="file" aria-label="business card image" name="userAvatar" accept=".png, .jpg, .jpeg" value={this.props.userAvatar}/>
          <input type="reset" value={this.props.reset} name="reset"/>
          <button name="downloadBtn" value={this.props.download}>Download</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;