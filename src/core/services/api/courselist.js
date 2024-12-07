
import instance from "../interceptor/index";

export const getCourseListWithPagination = async (query, teacherId, categoryQuery, startDate, endDate, sorting, minCost, maxCost) => {
    let url = `/Home/GetCoursesWithPagination?PageNumber=1&SortingCol=${sorting ? sorting : 'Active'}&SortType=DESC&RowsOfPage=10`;

    if (query) {
        url += `&Query=${query}`;
    }

    if (teacherId) {
        url += `&TeacherId=${teacherId}`;
    }

    if (categoryQuery) {
        url += `&TechCount=1&ListTech=${categoryQuery}`;
    }

    if (startDate) {
        url += `&StartDate=${startDate}`;
    }
    if (endDate) {
        url += `&EndDate=${endDate}`;
    }
    if (minCost) {
        url += `&CostDown=${minCost}`;
    }
    if (maxCost) {
        url += `&CostUp=${maxCost}`;
    }

    const response = await instance.get(url);
    return response;
};
