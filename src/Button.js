import React from 'react';
import styled, { css } from 'styled-components';

const Button1 = styled.button`
  background-color: yellow;
  color: black;
  padding: 0.5em;
  &:hover {
    background-color: firebrick;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

function Button(props) {
  return(
    <div>
      <Button1>hello world</Button1>
      <Button1 primary>yo yo yo</Button1>
    </div>
  );
}

export default Button;