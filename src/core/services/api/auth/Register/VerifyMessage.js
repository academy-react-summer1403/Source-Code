import { getItem } from "../../../common/storage.services";
import http from "../../../interceptor/index";

export const VerifyMessage = async ({ verifyCode }) => {
    try {
        const phoneNumber = getItem("phoneNumber");

        console.log(phoneNumber);

        await http.post("/Sign/VerifyMessage", {
            phoneNumber: phoneNumber,
            verifyCode: verifyCode,
        });
    } catch (error) {
        return error;
    }
};