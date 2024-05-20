import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:8080' // ajuste a URL conforme necessário
});

export default axiosConfig;
