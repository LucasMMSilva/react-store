import API from './api';

export const getAllProducts = async () => {
    const response = await API.get('/products');
    return response.data;
}

export const getProductById = async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
}

export const getAllCategories = async () => {
    const response = await API.get('/products/categories');
    return response.data;
}

export const getProductsByCategory = async (category) => {
    const response = await API.get(`/products/category/${category}`);
    return response.data;
}

