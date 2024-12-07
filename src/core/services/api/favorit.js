import instance from "../interceptor/index";

const favorit = async () => {

    const url = `/Course/AddCourseFavorite`;


    const response = await instance.post(url);
    return response;
};
export default favorit;