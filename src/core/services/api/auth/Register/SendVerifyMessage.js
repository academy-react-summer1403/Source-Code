import http from "../../../interceptor/index";

export const SendVerifyMessage = async ({ phoneNumber }) => {
    try {
        await http.post("/Sign/SendVerifyMessage", { phoneNumber });

        console.log("Sending SMS to:", phoneNumber);
    } catch (error) {
        console.error("Failed to send SMS:", error);

        return error;
    }
};