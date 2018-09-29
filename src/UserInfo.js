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
          <input type="text" aria-label="full name" name="fullName" placeholder="Full Name"/>
          <input type="text" aria-label="job title" name="jobTitle" placeholder="Job Title"/>
          <input type="url" aria-label="website url" name="websiteURL" placeholder="Webiste URL"/>
          <input type="phone" aria-label="phone number" name="phoneNumber" placeholder="Phone Number"/>
          <input type="email" aria-label="email" name="userEmail" placeholder="Email"/>
          <input type="file" aria-label="business card image" name="userAvatar" accept=".png, .jpg, .jpeg"/>
          <input type="reset" value="Reset" />
          <button>Download</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;