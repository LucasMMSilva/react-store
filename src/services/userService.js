import API from './api';

export const getAllUsers = async () => {
    const response = await API.get('/users');
    return response;
}

export const getUserById = async (id) => {
    const response = await API.get(`/users/${id}`);
    return response;
}

export const createUser = async (data) => {
    const response = await API.post('/users', data);
    return response;
}

export const updateUser = async (id, data) => {
    const response = await API.put(`/users/${id}`, data);
    return response;
}

export const deleteUser = async (id) => {
    const response = await API.delete(`/users/${id}`);
    return response;
}