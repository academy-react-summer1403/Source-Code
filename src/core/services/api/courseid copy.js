import instance from "../interceptor/index";

const GetCourseDetails = async (courseId) => {

    const url = `/Home/GetCourseDetails?CourseId=${courseId}`;


    const response = await instance.get(url);
    return response;
};
export default GetCourseDetails;