// src/components/Input/styles.js
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: absolute;
  top: 40%; /* Ajusta a posição do input um pouco acima do botão */
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o input */
  width: 35%; /* Reduz a largura para 50% */

  input {
    width: 100%; /* O input ocupará toda a largura do container */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    text-align: center; /* Centraliza o texto dentro do input */
  }
`;
