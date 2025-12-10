import axios from 'axios';

const API_ID = '3283c41c';
const API_KEY = '359ad32e8530aa92afeaade574d6cb93';
const BASE_URL = 'https://api.edamam.com/search';

export const getRecipes = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      app_id: API_ID,
      app_key: API_KEY,
    },
  });
  return response.data.hits;
};