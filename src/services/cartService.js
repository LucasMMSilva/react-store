import API from './api';

export const getAllCarts = async () => {
    const response = await API.get('/carts');
    return response;
}

export const getCartById = async (id) => {
    const response = await API.get(`/carts/${id}`);
    return response;
}

export const getCartsByUser = async (userId) => {
    const response = await API.get(`/carts/user/${userId}`);
    return response;
}

export const createCart = async (data) => {
    const response = await API.post('/carts', data);
    return response;
}

export const updateCart = async (id, data) => {
    const response = await API.put(`/carts/${id}`, data);
    return response;
}

export const deleteCart = async (id) => {
    const response = await API.delete(`/carts/${id}`);
    return response;
}