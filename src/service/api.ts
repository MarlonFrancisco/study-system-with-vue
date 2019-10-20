import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from '../helpers/auth';

const api = axios.create({
    baseURL: 'https://studytcc.herokuapp.com',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
        config.headers.authorization = token;
    }

    return config;
});

export default api;
