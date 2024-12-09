import React from 'react';
import { RepoDetailsContainer } from './styles';

function RepoDetails({ name, profession, city, link }) {
  return (
    <RepoDetailsContainer>
      <h3>Nome: {name}</h3>
      <p>Profissão: {profession}</p>
      <p>Cidade: {city}</p>
      {link && (
        <p>
          <strong>Ir para perfil/repositório: </strong>
          <a href={link} target="_blank" rel="noopener noreferrer">
            clique aqui (link)
          </a>
        </p>
      )}
    </RepoDetailsContainer>
  );
}

export default RepoDetails;
