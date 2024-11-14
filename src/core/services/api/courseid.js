import instance from "../interceptor/index";

const GetCourseDetails = async (courseId) => {

    const url = `/Home/GetCourseDetails?CourseId=${courseId}`;

    // try {
    //     return url;
    // } catch (error) {
    //     console.log(error);
    // }

    const response = await instance.get(url);
    return response;
};
export default GetCourseDetails;