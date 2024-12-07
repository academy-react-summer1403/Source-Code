import instance from "../interceptor/index";

const courselevel = async () => {

    const url = `/CourseLevel/GetAllCourseLevel`;

    // try {
    //     return url;
    // } catch (error) {
    //     console.log(error);
    // }

    const response = await instance.get(url);
    return response;
};
export default courselevel;