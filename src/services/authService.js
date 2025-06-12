import API from './api';

export const login = (username, password) => {
    const data = {
        username,
        password
    };
    const response = API.post('/auth/login', data);
    return response;
}