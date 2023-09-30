import axios from 'axios';

const pokeClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default pokeClient;
