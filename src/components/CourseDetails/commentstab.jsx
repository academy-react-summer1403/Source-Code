import { Listbox, Transition } from "@headlessui/react";
import {
    FaceFrownIcon,
    FaceSmileIcon,
    FireIcon,
    HandThumbUpIcon,
    HeartIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import person from "../../../public/person.png";
import { CourseRate } from "../../components/Common/Courses/CourseRate";
import { useParams } from "react-router-dom";
import http from "../../core/services/interceptor";
import { format } from "date-fns-jalali";
import { formatDistance } from "date-fns/formatDistance";
import { faIR } from "date-fns/locale";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
const reviews = [
    {
        id: 1,
        rating: 5,
        renderReplyElement: `<button>پاسخ</button>`,
        renderReportElement: `<button>گزارش</button>`,

        content: `
      <p>چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا کچلت کردن</p>
    `,
        date: "12 اردیبهشت , 1403",
        datetime: "1403-02-12",
        author: " ساناز زاهدی",
        avatarSrc:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 2,
        rating: 5,
        renderReplyElement: `<button >پاسخ</button>`,
        renderReportElement: `<button >گزارش</button>`,

        content: `
      <p>چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا کچلت کردن    </p>
    `,
        date: "12 اردیبهشت , 1403",
        datetime: "1403-02-12",
        author: "فاطمه صالحی ",
        avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    //  More reviews...
];

function classNamesThree(...classes) {
    return classes.filter(Boolean).join(" ");
}

function classNamesTwo(...classes) {
    return classes.filter(Boolean).join(" ");
}

const moods = [
    {
        name: "Excited",
        value: "excited",
        icon: FireIcon,
        iconColor: "text-white",
        bgColor: "bg-red-500",
    },
    {
        name: "Loved",
        value: "loved",
        icon: HeartIcon,
        iconColor: "text-white",
        bgColor: "bg-pink-400",
    },
    {
        name: "Happy",
        value: "happy",
        icon: FaceSmileIcon,
        iconColor: "text-white",
        bgColor: "bg-green-400",
    },
    {
        name: "Sad",
        value: "sad",
        icon: FaceFrownIcon,
        iconColor: "text-white",
        bgColor: "bg-yellow-400",
    },
    {
        name: "Thumbsy",
        value: "thumbsy",
        icon: HandThumbUpIcon,
        iconColor: "text-white",
        bgColor: "bg-blue-500",
    },
    {
        name: "I feel nothing",
        value: null,
        icon: XMarkIcon,
        iconColor: "text-gray-400",
        bgColor: "bg-transparent",
    },
];

function classNamesOne(...classes) {
    return classes.filter(Boolean).join(" ");
}

const CommentsTab = ({ comments }) => {
    const params = useParams();
    console.log(params);

    const [selected, setSelected] = useState(moods[5]);
    const [selectedThree, setSelectedThree] = useState(moods[5]);
    const [CommentList, setCommentList] = useState(null);
    const [repCommentList, setRepCommentList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    // console.log(CommentList);
    // const [addComment,SetAddComment] = useState(null);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const getCourseComment = async () => {
        try {
            const res = await http.get(`/Course/GetCourseCommnets/${params.id}`);
            console.log("COMMENTS", res);
            setCommentList(res);
        } catch (err) {
            // console.log(err.message);
        }
    };

    const sendCourseComment = async (fafa) => {
        try {
            // const objj = {
            //   Title: fafa.Title,
            //   Describe:fafa.Describe ,
            //   courseId: params.id,
            // };
            const data = new FormData();
            data.append("courseId", params.id);
            data.append("CommentId", fafa.id);
            data.append("Title", fafa.Title);
            data.append("Describe", fafa.Describe);
            const res = await http.post("/Course/AddCommentCourse", data);
            console.log("AddComment", res);
            // SetAddComment(res);
            if (res.success) {
                toast.success("نظر شما با موفقیت ثبت شد", {
                    className: " !bg-cardBg !text-asBlack-100",
                });
            } else {
                toast.err("!!!خطا در ارسال نظر", {
                    className: " !bg-cardBg !text-asBlack-100",
                })
            }
        } catch (err) {
            toast.err("!!!خطا در ارسال نظر", {
                className: " !bg-cardBg !text-asBlack-100",
            })
        }
    };

    const sendRepCourseComment = async (fafa) => {
        try {
            const data = new FormData();
            data.append("Title", fafa.Title);
            data.append("Describe", fafa.Describe);
            data.append("CourseId", params.id);
            data.append("CommentId", fafa.id);
            const ress = await http.post("/Course/AddReplyCourseComment", data);
            console.log("AddComment", ress);
        } catch (err2) {
            console.log(err2.message);
        }
    };
    const getRepComment = async (A, B) => {
        // console.log("rr",A,B)
        const res = await http.get(`/Course/GetCourseReplyCommnets/${A}/${B}`);
        setRepCommentList(res);
        console.log("rrrr", res);
    };

    useEffect(() => {
        getCourseComment();
    }, []);

    const handleShowRepClick = (item) => {
        getRepComment(item.courseId, item.id);
        toggleVisibility();
    };

    const handleRepClick = () => {
        toggleVisibility2();
        sendRepCourseComment();
    };

    return (
        <>

            <div className="min-w-0 flex-1 overflow-hidden rounded-lg">
                <Formik
                    initialValues={{ Title: "", Describe: "" }}
                    onSubmit={(v) => sendCourseComment(v)}
                >
                    <Form action="#" className="relative">
                        <div className="overflow-hidden rounded-lg border shadow-sm focus-within:border-gray-500  focus-within:ring-1 focus-within:ring-borderGray">
                            <label htmlFor="comment" className="sr-only">
                                نوشتن پیام
                            </label>
                            <Field
                                rows={3}
                                name="Describe"
                                id="comment"
                                className="bg-cardBg pr-2 text-asBlack-50 block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm outline-none border-gray-500"
                                placeholder="نوشتن پیام..."
                                defaultValue={""}
                            />
                            <div className="py-2" aria-hidden="true">
                                <div className="py-px">
                                    <div className="h-9" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-cardBg mx-1 my-1 ">
                            <div className="flex items-center space-x-5">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    >

                                    </button>
                                </div>
                                <div className="flex  items-center">
                                    <div>
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="sr-only">
                                                        Your mood{" "}
                                                    </Listbox.Label>
                                                    <div className="relative">


                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                                                {moods.map((mood) => (
                                                                    <Listbox.Option
                                                                        key={mood.value}
                                                                        className={({ active }) =>
                                                                            classNamesOne(
                                                                                active ? "bg-gray-100" : "bg-white",
                                                                                "relative cursor-default select-none py-2 px-3"
                                                                            )
                                                                        }
                                                                        value={mood}
                                                                    >
                                                                        <div className="flex items-center">
                                                                            <div
                                                                                className={classNamesOne(
                                                                                    mood.bgColor,
                                                                                    "w-8 h-8 rounded-full flex items-center justify-center"
                                                                                )}
                                                                            >
                                                                                <mood.icon
                                                                                    className={classNamesOne(
                                                                                        mood.iconColor,
                                                                                        "flex-shrink-0 h-5 w-5"
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <span className="ml-3 block truncate font-medium">
                                                                                {mood.name}
                                                                            </span>
                                                                        </div>
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="flex-shrink-0 mx-auto w-min mb-5">
                                <button
                                    type="submit"
                                    className="hover:font-semibold inline-flex items-center mx-auto mt-5 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
                                >
                                    ارسال
                                </button>
                            </div>
                    </Form>
                </Formik>
            </div>
            {CommentList?.map((item) => {
                return (
                    <>
                        <div className="border p-4 flex flex-col font-iranSans text-xs gap-4 border-asBlack  text-asBlack-50  rounded-lg  ">
                            <div className="flex flex-col justify-center bg-cardBg2 p-4 rounded-lg gap-x-4">
                                <div className=" flex gap-x-4">
                                    {item.pictureAddress == null ||
                                        item.pictureAddress == undefined ||
                                        item.pictureAddress == "" ? (
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src={person}
                                            onError={(e) => (e.currentTarget.src = person)}
                                        />
                                    ) : (
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src={item.pictureAddress}
                                        />
                                    )}
                                    <div> {item.author} </div>
                                    <div>{format(new Date(item.insertDate), "d MMMM yyyy")}</div>
                                    <div>
                                        {formatDistance(new Date(item.insertDate), new Date(), {
                                            addSuffix: true,
                                            locale: faIR,
                                        })}
                                    </div>
                                </div>
                                <div className="flex pr-14 bg-cardBg2 px-4 rounded-lg gap-x-4">
                                    <div className="text-ellipsis text-wrap truncate">
                                        {item.describe}
                                    </div>
                                </div>
                            </div>

                            {item.acceptReplysCount > 0 ? (
                                <>
                                    <button
                                        className="bg-cardBg2 p-2 rounded-lg"
                                        onClick={() => handleShowRepClick(item)}
                                    >
                                        {/* {isVisible ? "Hide" : "Show"} */}
                                        نمایش پاسخ ها
                                    </button>

                                    {isVisible &&
                                        repCommentList &&
                                        repCommentList.map((item, index) => {
                                            return (
                                                <div
                                                    className="flex border-asBlack-200 pr-14 bg-cardBg2 px-4 rounded-lg gap-x-4"
                                                    key={index}
                                                >
                                                    <div className="text-ellipsis text-wrap pt-2 truncate">
                                                        <img
                                                            className="inline-block my-auto h-10 w-10 rounded-full"
                                                            src={item.pictureAddress}
                                                        />
                                                    </div>
                                                    <div className="text-ellipsis text-wrap my-auto truncate"> متن پاسخ:{item?.describe} </div>
                                                </div>
                                            );
                                        })}
                                </>
                            ) : (
                                " "
                            )}

                            <button
                                className="bg-cardBg2 p-2 rounded-lg"
                                onClick={() => handleRepClick()}
                            >
                                {/* {isVisible2 ? "Hide" : "Show"} */}
                                پاسخ دادن
                            </button>
                            {isVisible2 && (
                                <div>
                                    <Formik
                                        initialValues={{ Title: "", Describe: "", id: item.id }}
                                        onSubmit={sendRepCourseComment}
                                    >
                                        <Form action="#" className="relative">
                                            <div className="overflow-hidden rounded-lg border shadow-sm focus-within:border-gray-500  focus-within:ring-1 focus-within:ring-borderGray">
                                                <label htmlFor="comment" className="sr-only">
                                                    نوشتن پیام
                                                </label>
                                                <Field
                                                    rows={3}
                                                    name="Describe"
                                                    id="comment"
                                                    className="bg-cardBg pr-2 text-asBlack-50 block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm outline-none border-gray-500"
                                                    placeholder="نوشتن پیام..."
                                                    defaultValue={""}
                                                />
                                                <div className="py-2" aria-hidden="true">
                                                    <div className="py-px">
                                                        <div className="h-9" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-cardBg mx-1 my-1 ">
                                                <div className="flex items-center space-x-5">
                                                    <div className="flex items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                                        >

                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button
                                                        type="submit"
                                                        className="hover:font-semibold inline-flex items-center rounded-md border border-transparent bg-sub px-4 py-2 text-sm font-medium text-asWhite shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2"
                                                    >
                                                        ارسال
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            )}
                        </div>
                    </>
                );
            })}

        </>
    );
};
export default CommentsTab;
