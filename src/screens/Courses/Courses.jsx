// import React, { useState, useEffect } from "react";
// import Card from "../../components/Card/Card";
// import Card1 from "../../components/Card/Card1";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import Accordion from "@mui/material/Accordion";
// // import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import Button from '@mui/material/Button';
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import SortFilter from "../../components/SorfFilter/SortFilter";
// import courselevel from "../../core/services/api/courselevel";



// const Courses = () => {
//     const [count, setCount] = useState(1);

//     const [level, setcourselevel] = useState([])

//     const GetCourselevel = async () => {
//         const res = await courselevel()

//         setcourselevel(res)
//     }
// console.log(level)
// useEffect(() => {
//     GetCourselevel()
// }, [])


//     return (
//         <div className="bg-slate-50">
//             <div className="w-11/12 h-80 mx-auto my-7 flex">
//                 <div className="w-1/2 h-max my-auto">
//                     <img
//                         className="absolute z-10 h-[11%] right-16 -mt-6"
//                         src="public/Rectangle 251.png"
//                     />
//                     <img
//                         className="absolute z-10 h-[22%] -mt-12 right-[45%]"
//                         src="public/Dots (1).png"
//                     />
//                     <img
//                         className="absolute z-10 h-[18%] mt-16 right-[7%]"
//                         src="public/Dots.png"
//                     />
//                     <div className="z-50 relative font-normal mr-10 w-max h-max text-lg text-blue-500">
//                         مهمه از کی یاد می گیری!!
//                     </div>
//                     <div className="z-50 relative font-bold mt-3 mr-10 w-max h-max text-lg">
//                         اموزش برنامه نویسی با بهترین ها
//                     </div>
//                     <div className="z-50 relative mt-3 mr-10 text-stone-700 h-max text-sm">
//                         آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
//                         برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
//                         کامپیوتری را ایجاد و توسعه دهند.{" "}
//                     </div>
//                 </div>
//                 <div className="w-1/2 h/full">
//                     <img className="w-[85%] mx-auto h-full" src="public/Asset 1 1.png" />
//                 </div>
//             </div>
//             <div className="w-11/12 mx-auto mb-12 flex">
//                 <div className="w-1/6 shadow-2xl h-max rounded-3xl ml-5 bg-white ">
//                     <div className="bg-gray-200 mx-auto w-10/12 mt-6 font-extralight py-1.5 pr-3 my-2 rounded-lg flex">
//                         <svg width="16" height="16" className="my-auto ml-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M4.49998 1.75H15.5C16.4166 1.75 17.1666 2.5 17.1666 3.41667V5.25C17.1666 5.91667 16.75 6.75 16.3333 7.16667L12.75 10.3333C12.25 10.75 11.9166 11.5833 11.9166 12.25V15.8333C11.9166 16.3333 11.5833 17 11.1666 17.25L9.99998 18C8.91665 18.6667 7.41665 17.9167 7.41665 16.5833V12.1667C7.41665 11.5833 7.08331 10.8333 6.74998 10.4167L3.58331 7.08333C3.16665 6.66667 2.83331 5.91667 2.83331 5.41667V3.5C2.83331 2.5 3.58331 1.75 4.49998 1.75Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M9.10833 1.75L5 8.33333" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         {" "}
//                         فیلتر{" "}
//                     </div>
//                     <div className="pb-5 mt-6">
//                         <Accordion>
//                             <AccordionSummary
//                                 className="font-light"
//                                 // expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                             >
//                                 دسته بندی ها
//                             </AccordionSummary>
//                             <AccordionDetails></AccordionDetails>
//                         </Accordion>
//                         <Accordion>
//                             <AccordionSummary
//                                 // expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                                 className="font-light"
//                             >
//                                 قیمت
//                             </AccordionSummary>
//                             <AccordionDetails></AccordionDetails>
//                         </Accordion>
//                         <Accordion>
//                             <AccordionSummary
//                                 // expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                                 className="font-light"
//                             >
//                                 ‍   سطح
//                             </AccordionSummary>
//                             <AccordionDetails className="-mr-5 font-light -mt-5 text-slate-500 pr-2">

//                                 <FormGroup key={level.id}>
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label={level.levelName}

//                                     />
//                                 </FormGroup>

//                             </AccordionDetails>
//                         </Accordion>
//                         <Accordion>
//                             <AccordionSummary
//                                 // expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                                 className="font-light"
//                             >
//                                 زمان
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <FormGroup className="-mr-5 font-light -mt-5 text-slate-500 pr-2">
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="۱۵ روزه"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="۳۰ روزه"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="۴۵ روزه"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="۶۰ روزه"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="۹۰ روزه"
//                                     />
//                                 </FormGroup>
//                             </AccordionDetails>
//                         </Accordion>
//                         <Accordion>
//                             <AccordionSummary
//                                 // expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                                 className="font-light"
//                             >
//                                 استاتید
//                             </AccordionSummary>
//                             <AccordionDetails className="-mr-5 font-light -mt-5 text-slate-500 pr-2">
//                                 <FormGroup>
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="دکتر بحرالعلوم"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="مسعود هشمتی"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="بهاره یزدانی"
//                                     />
//                                     <FormControlLabel
//                                         control={<Checkbox />}
//                                         label="سالار حیدری"
//                                     />
//                                 </FormGroup>
//                             </AccordionDetails>
//                         </Accordion>
//                     </div>
//                 </div>
//                 <div className="w-5/6">
//                     <div className=" h-20 flex">
//                         <div className="h-1/2 w-1/12 my-[1.5%] mr-4 flex bg-slate-200 gap-3 rounded-lg">
//                             <div onClick={() => setCount(1)} className={(count === 1 ? "bg-white" : "") + " h-3/4 my-auto rounded-lg mr-2 p-0.5 cursor-pointer"} >
//                                 <svg className="mx-auto my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.03003 8.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.03003 15.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M8.51001 21.9898V2.00977" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M15.51 21.9898V2.00977" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </div>
//                             <div onClick={() => setCount(2)} className={(count === 2 ? "bg-white" : "") + " h-3/4 rounded-lg my-auto p-0.5 cursor-pointer"}>
//                                 <svg className="mx-auto my-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.03003 8.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.03003 15.5H22" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>

//                             </div>
//                         </div>
//                         <div className="h-1/2 my-auto w-1/2 mr-32 flex">
//                             <input
//                                 className="w-full rounded-2xl text-xs py-3 pr-2"
//                                 type="text"
//                                 placeholder="چی میخوای یاد بگیری ؟"
//                             />
//                             <svg
//                                 className="-mr-7 my-auto"
//                                 width="19"
//                                 height="20"
//                                 viewBox="0 0 24 25"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     opacity="0.4"
//                                     d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
//                                     fill="#2196F3"
//                                 />
//                                 <path
//                                     d="M21.3001 22.5001C21.1201 22.5001 20.9401 22.4301 20.8101 22.3001L18.9501 20.4401C18.6801 20.1701 18.6801 19.7301 18.9501 19.4501C19.2201 19.1801 19.6601 19.1801 19.9401 19.4501L21.8001 21.3101C22.0701 21.5801 22.0701 22.0201 21.8001 22.3001C21.6601 22.4301 21.4801 22.5001 21.3001 22.5001Z"
//                                     fill="#2196F3"
//                                 />
//                             </svg>
//                         </div>
//                         <div className="h-min mr-12 my-auto w-1/6">
//                             <SortFilter />
//                         </div>
//                     </div>
//                     <div>
//                         {count === 1 && <Card />}
//                         {count === 2 && <Card1 />}
//                     </div>
//                     <div className="w-min mx-auto">
//                         <button className="bg-sky-500 w-max py-2 px-4 rounded-xl text-white">
//                             مشاهده بیشتر
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     );
// };

// export default Courses;


import React, { useEffect, useState } from "react";
import TabsBtn from "../../components/Common/Buttons/TabsBtn";
import TabsContent from "../../components/Common/Courses/TabsContent";
import CourseBlogTitle from "../../components/Common/CourseBlogTitle";
import DownArrowBtn from "../../components/Common/Buttons/DownArrowBtn";
import ChangePage from "../../components/Common/ChangePage";
import http from "../../core/services/interceptor";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "../../components/Common/Loading/LoadingSpinner";
// import { max } from "date-fns-jalali";

const Courses = () => {
    const [cat, setCat] = useState([]);
    const [CourseList, setCourseList] = useState(null);
    const [activeView, setActiveView] = useState("view1");
    const [filterObj, setFilterObj] = useState({
        PageNumber: 1,
        RowsOfPage: 9,
        category: [],
        price: {
            min: 0,
            max: 1000000000,
            value: [0, 1000000000],
        },
        Query: "",
        SortingCol: "",
        SortType: "DESC",
        teacher: [],
    });
    const [lastLink, setLastLink] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // شبیه‌سازی لودینگ
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);
    const handleViewClick = (view) => {
        setActiveView(view);
    };

    useEffect(() => {
        console.log("test", filterObj);
    }, [filterObj]);

    const getCategoryList = async () => {
        try {
            const catResult = await http.get("/Home/GetTechnologies");
            const newFilterObj = { ...filterObj };
            newFilterObj.category = catResult;

            const res = await http.get("/Home/GetTeachers");
            newFilterObj.teacher = res.map((item) => {
                return {
                    teacherId: item.teacherId,
                    fullName: item.fullName,
                    checked: false,
                };
            });

            setFilterObj(newFilterObj);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFilterObjChange = (key, value) => {
        const newObj = { ...filterObj };
        newObj[key] = value;
        setFilterObj(newObj);
    };

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCourseList = async (filterParam) => {
        let url = `/Home/GetCoursesWithPagination?PageNumber=${filterParam.PageNumber}&RowsOfPage=${filterParam.RowsOfPage}`;
        if (filterParam.Query) url = url + `&query=${filterParam.Query}`;
        if (filterParam.SortingCol)
            url =
                url +
                `&SortingCol=${filterParam.SortingCol}&SortType=${filterParam.SortType}`;
        const teacher = filterParam.teacher?.find((item) => item.checked);
        if (teacher) url = url + `&TeacherId=${teacher.teacherId}`;
        if (
            filterParam.price.value[0] !== filterParam.price.min ||
            filterParam.price.value[1] !== filterParam.price.max
        ) {
            url =
                url +
                `&CostDown=${filterParam.price.value[0]}&CostUp=${filterParam.price.value[1]}`;
        }
        const ListTechArr = filterParam.category
            .filter((item) => item.checked)
            .map((item) => item.id);
        const ListTech = ListTechArr.join(",");
        const TechCount = ListTechArr.length;
        if (TechCount > 0) url += `&TechCount=${TechCount}&ListTech=${ListTech}`;
        if (filterParam.category && filterParam.category.length > 0) {
            const techList = filterParam.category.map((item) => item.id);
            url = url + `&ListTech=${techList}`;
        }
        if (url === lastLink) return;
        setLastLink(url);
        const res = await http.get(url);
        console.log(res);
        let min = null,
            max = 0;
        res.courseFilterDtos.forEach((element) => {
            if (!min || element.cost < min) min = element.cost;
            if (element.cost > max) max = element.cost;
        });

        setFilterObj((old) => {
            const newObj = { ...old };
            newObj.price.min = min;
            newObj.price.max = max;
            newObj.price.value[0] = min;
            newObj.price.value[1] = max;
            return newObj;
        });
        setCourseList(res);
    };

    useEffect(() => {
        getCourseList(filterObj);
    }, [filterObj]);

    const handleLikeChange = async (id, likeDislike) => {
        try {
            const result = await http.post(
                `/Course/AddCourse${likeDislike === "like" ? "Like" : "DissLike"
                }?CourseId=${id}`
            );
            if (result.success) {
                toast.success("دوره ی مورد نظر پسندیده شد", {
                    className: "!bg-cardBg !text-asBlack-100",
                });
            } else {
                toast.success("قبلا این دوره را پسندیدید", {
                    className: "!bg-cardBg !text-asBlack-100",
                });
                return;
            }
        } catch (error) {
            toast.success("قبلا این دوره را پسندیدید", {
                className: "!bg-cardBg !text-asBlack-100",
            });
        }
        const newList = { ...CourseList };
        newList.courseFilterDtos = CourseList.courseFilterDtos.map((item) => {
            if (item.courseId === id) {
                if (likeDislike === "like") {
                    item.likeCount += 1;
                    item.userIsLiked = true;
                    item.currentUserDissLike = false;
                } else {
                    item.dissLikeCount += 1;
                    item.userIsLiked = false;
                    item.currentUserDissLike = true;
                }
            }
            return item;
        });
        setCourseList(newList);
    };

    const handleRateChange = async (id, rate) => {
        try {
            const response = await http.post(
                `/Course/SetCourseRating?CourseId=${id}&RateNumber=${rate}`
            );
            if (response.success) {
                toast.success("امتیازدهی شما با موفقیت ثبت شد", {
                    className: " !bg-cardBg !text-asBlack-100",
                });
            } else {
                toast.error("امتیاز دهی ناموفق بود", {
                    className: " !bg-cardBg !text-asBlack-100",
                });
            }
        } catch (error) {
            toast.error("امتیاز دهی ناموفق بود", {
                className: " !bg-cardBg !text-asBlack-100",
            });
        }
    };

    return (
        <>
            <div className="w-11/12 h-80 mx-auto my-7 flex">
                <div className="w-1/2 h-max my-auto">
                    <img
                        className="absolute z-10 h-[11%] right-16 -mt-6"
                        src="public/Rectangle 251.png"
                    />
                    <img
                        className="absolute z-10 h-[22%] -mt-12 right-[45%]"
                        src="public/Dots (1).png"
                    />
                    <img
                        className="absolute z-10 h-[18%] mt-16 right-[7%]"
                        src="public/Dots.png"
                    />
                    <div className="z-50 relative font-normal mr-10 w-max h-max text-lg text-blue-500">
                        مهمه از کی یاد می گیری!!
                    </div>
                    <div className="z-50 relative font-bold mt-3 mr-10 w-max h-max text-lg">
                        اموزش برنامه نویسی با بهترین ها
                    </div>
                    <div className="z-50 relative mt-3 mr-10 text-stone-700 h-max text-sm">
                        آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
                        برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
                        کامپیوتری را ایجاد و توسعه دهند.{" "}
                    </div>
                </div>
                <div className="w-1/2 h/full">
                    <img className="w-[85%] mx-auto h-full" src="public/Asset 1 1.png" />
                </div>
            </div>
            <div className="Loading">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="flex flex-col gap-10 bg-rangBg pt-12">

                        <div className="text-co flex flex-row-reverse md:justify-evenly justify-around mt-10 pb-6">
                            <TabsBtn
                                activeView={activeView}
                                handleViewClick1={() => {
                                    handleViewClick("view1");
                                }}
                                handleViewClick2={() => {
                                    handleViewClick("view2");
                                }}
                            />
                        </div>

                        <TabsContent
                            setFilter={handleFilterObjChange}
                            onLikeChange={handleLikeChange}
                            onRateChange={handleRateChange}
                            activeView={activeView}
                            cardDetail={CourseList?.courseFilterDtos}
                            filterObj={filterObj}
                            filterChange={handleFilterObjChange}
                            cat={cat}
                        />
                        {CourseList && (
                            <ChangePage
                                pageCount={Math.ceil(
                                    CourseList.totalCount / filterObj.RowsOfPage
                                )}
                                currentPage={filterObj.PageNumber}
                                onChange={handleFilterObjChange}
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Courses;
