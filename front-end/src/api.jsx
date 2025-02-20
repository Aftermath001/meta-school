import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const loginUser = async (credentials) => {
  const { data } = await API.post('/auth/login', credentials);
  return data;
};