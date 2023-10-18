import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000, // timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default apiInstance;