import { getItem, removeItem } from "../../../common/storage.services";
import http from "../../../interceptor/index";

export const RegisterApi = async ({ gmail, password }) => {
    try {
        const phoneNumber = getItem("phoneNumber");

        console.log(phoneNumber);

        await http.post("/Sign/Register", {
            password: password,
            gmail: gmail,
            phoneNumber: phoneNumber,
        });
        // removeItem("phoneNumber");
    } catch (error) {
        console.log(error);
        return error;
    }
};