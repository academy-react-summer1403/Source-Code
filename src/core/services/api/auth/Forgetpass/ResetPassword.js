import { getItem } from "../../../common/storage.services";
import http from "../../../interceptor/index";

export const ResetPassword = async ({ newPassword }) => {
    try {
        const userId = getItem("userId");
        const resetValue = getItem("resetValue");
        const res = await http.post("/Sign/Reset", {
            userId: userId,
            newPassword: newPassword,
            resetValue: resetValue,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};