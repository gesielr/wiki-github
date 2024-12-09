import styled from 'styled-components';

export const RepoDetailsContainer = styled.div`
  top: 400px;
  background: #f8f9fa; /* Fundo para diferenciar a seção */
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  
  position: absolute;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  a {
    color: #007bff;
    text-decoration: underline;
    font-size: 14px;

    &:hover {
      color: #0056b3;
    }
  }
`;
