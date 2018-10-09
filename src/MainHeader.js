import React from 'react';
// import './css/MainHeader.css';
import styled from 'styled-components/macro';

const Header = styled.header`
  font-size: 1.5rem;
  padding-top: 4em;
`;

const LogoWrapper = styled.div`
  text-align: center;
  border: 4px solid #F0CF65;
  border-radius: 4px;
  background-color: #fefefe;
  margin: 0 auto;
  width: 20em;
`;

const Logo = styled.h1`
  font-family: 'Mali', cursive
`;


function MainHeader(props) {
  return(
    <Header>
      <LogoWrapper>
        <Logo>Build-A-Card</Logo>
      </LogoWrapper>
    </Header>
  );
}

export default MainHeader;