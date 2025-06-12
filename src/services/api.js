import axios from 'axios';

const API = axios.create({
    baseURL: `https://fakestoreapi.com/`,
    timeout: 5000,
});

export default API;