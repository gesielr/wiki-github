// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // Base da API do GitHub
});

export default api;
