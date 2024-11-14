import instance from "../interceptor/index";

const GetProfileInfo = async () => {
    try {
        const response = "/SharePanel/GetProfileInfo";
        return response;
    } catch (error) {
        return false;
    }
};

export default GetProfileInfo;