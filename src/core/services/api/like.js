import instance from "../interceptor/index";

const Like = async (courseId) => {

    const url = `/Course/AddCourseLike?CourseId=${courseId}`;


    const response = await instance.post(url);
    return response;
};
export default Like;