// src/components/Button/index.js
import React from 'react';
import { ButtonContainer } from './styles';

function Button({ onClick, children }) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

export default Button;
