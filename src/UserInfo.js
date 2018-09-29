import React, { Component } from 'react';

function UserInfo(props) {
  return(
    <div className="user-info__wrapper">
      <h2>Enter Your Information</h2>
      <form action="POST">
        <input type="text" aria-label="full name"/>
        <input type="text" aria-label="job title"/>
        <input type="url" aria-label="website url"/>
        <input type="phone" aria-label="phone number"/>
        <input type="email" aria-label="email"/>
        <input type="file" aria-label="business card image"/>
        <input type="reset" value="Reset" />
        <button>Download</button>
      </form>
    </div>
  );
}

export default UserInfo;