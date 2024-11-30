import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const register = async (data) => {
  const url = `${API_URL}/auth/register`;
  return await axios.post(url, data);
};


export const login = async (data) => { 
  const url = `${API_URL}/auth/login`;
  return await axios.post(url, data);
}