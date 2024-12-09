import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Espaçamento entre os elementos */
`;

export const GithubLogo = styled.img`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

export const ClearLink = styled.a`
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  position: absolute;
  top: 230px;
  right: 500px;

  &:hover {
    color: #0056b3;
  }
`;

export const RepoDetailsContainer = styled.div`
  margin-top: 20px;
  background: #f8f9fa; /* Fundo para diferenciar a seção */
  padding: 20px;
  border-radius: 10px;
  text-align: center;

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
