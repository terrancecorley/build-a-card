import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formTextChanges, formImgChanges } from './actions';
import './css/UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onImgChange = this.onImgChange.bind(this);
    this.formReset = this.formReset.bind(this);
  }

  onChange(e) {
    this.props.dispatch(formTextChanges(e.target));
  }

  onImgChange(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    let target = e.target;
    
    reader.onload = () => {
      this.props.dispatch(formImgChanges(target, reader.result));
    };

    reader.readAsDataURL(file);
  }

  formReset() {
    this.props.handleFormReset();
  }

  render() {
    return(
      <div className="user-info__wrapper">
        <h2>Enter Your Information</h2>
        <form action="POST" className="user-info__form">
          <input type="text" aria-label="full name" name="fullName" placeholder="Full Name" value={this.props.fullName} onChange={this.onChange}/>
          <input type="text" aria-label="job title" name="jobTitle" placeholder="Job Title" value={this.props.jobTitle} onChange={this.onChange}/>
          <input type="url" aria-label="website url" name="websiteURL" placeholder="Website URL" value={this.props.websiteURL} onChange={this.onChange}/>
          <input type="phone" aria-label="phone number" name="phoneNumber" placeholder="Phone Number" value={this.props.phoneNumber} onChange={this.onChange}/>
          <input type="email" aria-label="email" name="userEmail" placeholder="Email" value={this.props.userEmail} onChange={this.onChange}/>
          <input type="file" aria-label="business card image" name="userAvatar" accept=".png, .jpg, .jpeg" onChange={this.onImgChange}/>
          <p>* Images 200 x 200 work best.</p>
          <label htmlFor="avatarBackgroundColor">Avatar Background Color</label>
          <input type="color" name="avatarBackgroundColor" id="avatarBackgroundColor" value={this.props.avatarBackgroundColor} onChange={this.onChange}/>
          <label htmlFor="infoBackgroundColor">Info Background Color</label>
          <input type="color" name="infoBackgroundColor" id="infoBackgroundColor" value={this.props.infoBackgroundColor} onChange={this.onChange}/>
          <label htmlFor="textColor">Text Color</label>
          <input type="color" name="textColor" id="textColor" value={this.props.textColor} onChange={this.onChange}/>
          <input type="reset" name="reset" onClick={this.formReset}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fullName: state.form.fullName,
  jobTitle: state.form.jobTitle,
  websiteURL: state.form.websiteURL,
  phoneNumber: state.form.phoneNumber,
  userEmail: state.form.userEmail,
  userAvatar: state.form.userAvatar,
  avatarBackgroundColor: state.form.avatarBackgroundColor,
  infoBackgroundColor: state.form.infoBackgroundColor,
  textColor: state.form.textColor,
});

export default connect(mapStateToProps)(UserInfo);