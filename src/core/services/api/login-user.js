import axios from "axios";

export async function LoginUser(values) {
  try {
    const response = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/Login",
      values
    );

    const message = response?.data.message;
    const isSuccess = response?.data.success;
    const token = response?.data.token;

    localStorage.setItem("token", token);

    return { response, message, isSuccess };
  } catch (error) {
    return error;
  }
}
