import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.formReset = this.formReset.bind(this);
  }

  onChange(e) {
    this.props.handleFormChange(e.target);
  }

  formReset() {
    this.props.handleFormReset();
  }

  render() {
    return(
      <div className="user-info__wrapper">
        <h2>Enter Your Information</h2>
        <form action="POST">
          <input type="text" aria-label="full name" name="fullName" placeholder="Full Name" value={this.props.fullName} onChange={this.onChange}/>
          <input type="text" aria-label="job title" name="jobTitle" placeholder="Job Title" value={this.props.jobTitle} onChange={this.onChange}/>
          <input type="url" aria-label="website url" name="websiteURL" placeholder="Website URL" value={this.props.websiteURL} onChange={this.onChange}/>
          <input type="phone" aria-label="phone number" name="phoneNumber" placeholder="Phone Number" value={this.props.phoneNumber} onChange={this.onChange}/>
          <input type="email" aria-label="email" name="userEmail" placeholder="Email" value={this.props.userEmail} onChange={this.onChange}/>
          <input type="file" aria-label="business card image" name="userAvatar" accept=".png, .jpg, .jpeg" onChange={this.onChange}/>
          <label htmlFor="backgroundColor">Background Color</label>
          <input type="color" name="backgroundColor" id="backgroundColor" value={this.props.backgroundColor} onChange={this.onChange}/>
          <label htmlFor="textColor">Text Color</label>
          <input type="color" name="textColor" id="textColor" value={this.props.textColor} onChange={this.onChange}/>
          <input type="reset" name="reset" onClick={this.formReset}/>
        </form>
      </div>
    );
  }
}

export default UserInfo;