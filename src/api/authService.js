import axios from "axios";
import { AUTH_ROUTES } from "../constants/constants"; // Ensure the correct path

export async function handleLogin(loginData) {
  try {
    const response = await axios.post(AUTH_ROUTES.LOGIN, loginData);
    return response.data; // Return only the data, not the full response object
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error.response?.data || { message: "An error occurred" };
  }
}

export async function handleRegister(registerData) {
  try {
    const response = await axios.post(AUTH_ROUTES.REGISTER, registerData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "An error occurred" };
  }
}
