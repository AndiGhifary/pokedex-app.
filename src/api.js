import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async () => {
  const response = await api.get('/pokemon?limit=151');
  return response.data.results;
};

export const getPokemonDetails = async (id) => {
  const response = await api.get(`/pokemon/${id}`);
  return response.data;
};