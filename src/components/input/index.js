// src/components/Input/index.js
import React from 'react';
import { InputContainer } from './styles';

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Digite o nome do usuário do GitHub"
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
