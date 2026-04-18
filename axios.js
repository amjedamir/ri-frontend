import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  'Pragma': 'no-cache',  
});


api.interceptors.request.use((config) => {
  
  return config;
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;