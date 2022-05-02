import axios from 'axios';
import { store } from '../store/store';

const axiosInstance = axios.create({
    baseURL: `https://localhost:3000/users`,
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    config.params = config.params || {};
    return config;
});

export default axiosInstance;
