import http from "../../../interceptor/index";

export const ForgetPass = async ({ email }) => {
    try {
        const res = http.post("/Sign/ForgetPassword", {
            email: email,
            baseUrl: window.location.href,
        });
        return res;
        // console.log("http://localhost:5173" + window.location.pathname);
        // console.log(window.location.href);
    } catch (error) {
        console.log(error);
    }
};