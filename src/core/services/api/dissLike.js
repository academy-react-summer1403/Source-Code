import instance from "../interceptor/index";

const disslike = async (courseId) => {

    const url = `/Course/AddCourseDissLike?CourseId=${courseId}`;


    const response = await instance.post(url);
    return response;
};
export default disslike;