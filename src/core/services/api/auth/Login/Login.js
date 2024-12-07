import { setItem } from "../../../common/storage.services";
import http from "../../../interceptor/index";

export const Login = async ({ phoneOrGmail, password, rememberMe }) => {
    try {
        const res = await http.post("/Sign/Login", {
            phoneOrGmail: phoneOrGmail,
            password: password,
            rememberMe: rememberMe,
        });
        console.log("Logged in successfully");
        setItem("token", res.token);
        return res;
    } catch (error) {
        console.error("Failed to Login:", error);

        return error;
    }
};