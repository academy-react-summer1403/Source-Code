import axios from "axios";

export async function LoginUser(user) {
  try {
    const response = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/Login",
      user
    );
    console.log(response.data);

    const message = response?.data.message;
    const isSuccess = response?.data.success;
    const token = response?.data.token;

    if (isSuccess && token) {
      localStorage.setItem("token", token);
      console.log("Token set successfully");
    } else {
      console.log(message || "Login failed");
    }

    return { response, message, isSuccess };
  } catch (error) {
    return { isSuccess: false, message: "خطا در ورود به حساب کاربری" };
  }
}
