import React, { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/Button';
import RepoDetails from '../../components/RepoDetails';
import api from '../../services/api';
import { PageContainer, GithubLogo, ClearLink } from './styles';

function Wiki() {
  const [search, setSearch] = useState(''); // Entrada do usuário
  const [repo, setRepo] = useState(null); // Dados do usuário
  const [project, setProject] = useState(null); // Dados do repositório específico

  // Função para extrair nome do usuário ou repositório
  const extractUsernameOrRepo = (urlOrUsername) => {
    try {
      const url = new URL(urlOrUsername);
      const pathParts = url.pathname.split('/').filter(Boolean);
      return pathParts.length === 2 ? pathParts : [pathParts[0]];
    } catch (e) {
      return urlOrUsername.includes('/') ? urlOrUsername.split('/') : [urlOrUsername];
    }
  };

  const handleSearch = async () => {
    const [username, repoName] = extractUsernameOrRepo(search);
  
    if (!username) {
      alert('Por favor, insira um nome de usuário ou repositório válido!');
      return;
    }
  
    try {
      if (repoName) {
        // Caso seja uma busca por repositório específico
        const response = await api.get(`/repos/${username}/${repoName}`);
        const { name, html_url } = response.data;
        setProject({
          name,
          link: html_url, // URL do repositório
        });
  
        // Adiciona informações do proprietário do repositório
        const userResponse = await api.get(`/users/${username}`);
        const { name: ownerName, bio, location, html_url: userUrl } = userResponse.data;
        setRepo({
          name: ownerName,
          profession: bio || 'Não informado',
          city: location || 'Não informado',
          link: userUrl, // URL do perfil do usuário
        });
      } else {
        // Caso seja uma busca por usuário apenas
        const response = await api.get(`/users/${username}`);
        const { name, bio, location, html_url } = response.data;
        setRepo({
          name,
          profession: bio || 'Não informado',
          city: location || 'Não informado',
          link: html_url, // URL do perfil do usuário
        });
        setProject(null); // Remove informações de projeto, se houver
      }
    } catch (error) {
      console.error('Erro ao buscar:', error);
      alert('Usuário ou repositório não encontrado!');
    }
  };
  

  // Função para limpar os dados
  const handleClear = () => {
    setSearch(''); // Limpa o campo de input
    setRepo(null); // Remove os dados do usuário
    setProject(null); // Remove os dados do projeto
  };

  return (
    <PageContainer>
    <GithubLogo src={require('../../assets/githubi.png')} alt="GitHub Logo" />
  
    {(repo || project) && <ClearLink onClick={handleClear}>Limpar</ClearLink>}
    <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    <Button onClick={handleSearch}>Buscar</Button>
  
    {/* Exibe as informações do usuário */}
    {repo && (
      <RepoDetails
        name={repo.name}
        profession={repo.profession}
        city={repo.city}
        link={project?.link || repo.link} // Mostra o link do repositório ou do perfil
      />
    )}
  </PageContainer>
  

  );
}

export default Wiki;
