import styled from 'styled-components';

export const ButtonContainer = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o botão */
  width: 25%; /* Reduz o tamanho para 30% menor (80% -> 50%) */
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
