import { backendURL } from "../utils/constants";
import axios from "axios";

export const createCart = async (data, token) => {
    const url = `${backendURL}/carts`;
    try {
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
};

export const getCarts = async (token) => {
    const url = `${backendURL}/carts`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching carts:", error);
        throw error;
    }
};

// New data including the old items to add product into cart
export const updateCarts = async (data, token) => {
    const url = `${backendURL}/carts`;
    try {
        const response = await axios.patch(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating cart:", error);
        throw error;
    }
};

export const getCartById = async (id, token) => {
    const url = `${backendURL}/carts/${id}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching cart with id ${id}:`, error);
        throw error;
    }
};
