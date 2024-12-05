import { backendURL } from "../utils/constants";
import axios from "axios";

export const createReview = async (data, token) => {
  const url = `${backendURL}/reviews`;
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
