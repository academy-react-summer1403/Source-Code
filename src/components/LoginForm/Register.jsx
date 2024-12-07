import { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SendVerifyMessage } from "../../core/services/api/auth/Register/SendVerifyMessage";
import { setItem } from "../../core/services/common/storage.services";
import { VerifyMessage } from "../../core/services/api/auth/Register/VerifyMessage";
import { RegisterApi } from "../../core/services/api/auth/Register/RegisterApi";

const Register = ({ onBack }) => {
    const [currentTab, setCurrentTab] = useState("1");
    const navigate = useNavigate();

    const notify = (msg) =>
        toast.success(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const onSubmit = async (values) => {
        setItem("phoneNumber", values.phoneNumber);

        try {
            await SendVerifyMessage({ phoneNumber: values.phoneNumber });

            notify("📨 SMS sent successfully");
        } catch (error) {
            console.error("Error sending SMS", error);
        }
    };

    const onSubmitCode = async (values) => {
        // setItem("verifyCode", values.verifyCode);

        try {
            await VerifyMessage({ verifyCode: values.verifyCode });
            notify("Code Appected");
        } catch (error) {
            console.error("کد اشتباه است یا زمان آن گذشته است", error);
        }
    };

    const onSubmitRegister = async (values) => {
        navigate("/login");
        try {
            await RegisterApi({ gmail: values.gmail, password: values.password });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="dark:bg-[#041124] flex flex-col md:flex-row h-screen justify-center items-start bg-white">
            <div className="flex flex-col w-full md:w-1/2 justify-start items-center p-5 md:p-10 text-black mt-10">
                {/* Tabs */}
                <div className="flex flex-col md:flex-row justify-between w-full max-w-xl h-20 mb-4 dark:bg-[#041124]">
                    {/* First tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${currentTab === "1" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("1")}
                    >
                        <div
                            className={`h-2 rounded-2xl w-full ${currentTab === "1" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            وارد کردن شماره همراه
                        </span>
                    </div>

                    {/* Space between tabs (for larger screens) */}
                    <div className="hidden md:block w-6" />

                    {/* Second tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${currentTab === "2" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("2")}
                    >
                        <div
                            className={`h-2 rounded-2xl w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            تایید کد ارسال شده
                        </span>
                    </div>

                    {/* Space between tabs (for larger screens) */}
                    <div className="hidden md:block w-6" />

                    {/* Third tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${currentTab === "3" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("3")}
                    >
                        <div
                            className={`h-2 rounded-2xl w-full ${currentTab === "3" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            وارد کردن اطلاعات شخصی
                        </span>
                    </div>
                </div>

                {/* محتویات تب‌ها */}
                {currentTab === "1" && (
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
                        <h2 className="text-3xl font-bold mb-2 text-right dark:text-white mt-10 sm:mt-24 pt-11  ">
                            خوش آمدید!😍
                        </h2>
                        <p className="text-lg  mt-4 mb-4 w-full text-right text-gray-500 dark:text-white">
                            لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
                        </p>
                        <label className="block text-lg mt-12  font-bold text-right mb-2 text-gray-700 dark:text-white">
                            شماره همراه
                        </label>
                        <Formik
                            initialValues={{ phoneNumber: "" }}
                            onSubmit={(values) => {
                                onSubmit(values);
                                setCurrentTab("2");
                            }}
                        >
                            <Form>
                                <div>
                                    <Field
                                        className="rounded-3xl text-lg h-11 mb-4 w-full bg-white text-black dark:text-white mt-4 px-4 border border-gray-300 hover:border-blue-500 transition"
                                        name="phoneNumber"
                                        placeholder="شماره همراه خود را وارد کنید"
                                    />
                                    <ErrorMessage
                                        name="phoneNumber"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-12 text-lg bg-blue-500 text-white rounded-3xl font-bold dark:text-white"
                                // onClick={() => setCurrentTab("2")}
                                >
                                    ارسال کد تایید
                                </button>
                            </Form>
                        </Formik>
                    </div>
                )}

                {currentTab === "2" && (
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center pt-12 ">
                        <h2 className="text-2xl font-bold mb-2 text-right dark:text-white mt-8 sm:mt-24">
                            تایید کد ارسال شده
                        </h2>
                        <p className="text-lg mt-4 mb-4 w-full text-right text-gray-500 dark:text-white">
                            کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
                        </p>
                        <label className="block text-lg mt-10 font-bold text-right mb-2 text-gray-700 dark:text-white">
                            کد تایید
                        </label>
                        <Formik
                            initialValues={{ verifyCode: "" }}
                            onSubmit={(values) => {
                                onSubmitCode(values);
                                setCurrentTab("3");
                            }}
                        >
                            <Form>
                                <div>
                                    <Field
                                        className="rounded-3xl h-11 text-lg mt-4 mb-4 w-full bg-white text-black dark:text-white px-4 border border-gray-300 hover:border-blue-500 transition"
                                        placeholder="کد تایید خود را وارد کنید"
                                        name="verifyCode"
                                    />
                                    <ErrorMessage
                                        name="verifyCode"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-12 mt-2 text-lg bg-blue-500 text-white rounded-3xl font-bold dark:text-white"
                                >
                                    تایید
                                </button>
                            </Form>
                        </Formik>
                    </div>
                )}

                {currentTab === "3" && (
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center pt-11 ">
                        <h2 className="text-3xl mt-10 font-bold mb-2 text-right dark:text-white sm:mt-24">
                            وارد کردن اطلاعات شخصی
                        </h2>
                        <p className="text-lg mt-5 mb-4 w-full text-right text-gray-500 dark:text-white">
                            لطفا اطلاعات شخصی خود را وارد کنید.
                        </p>

                        <Formik
                            initialValues={{ gmail: "", password: "" }}
                            onSubmit={(values) => {
                                onSubmitRegister(values);
                            }}
                        >
                            <Form>
                                <div>
                                    <div>
                                        <label className="block text-lg mt-8 font-bold text-right mb-2 text-gray-700 dark:text-white">
                                            ایمیل
                                        </label>
                                        <Field
                                            className="rounded-3xl h-11 text-lg mb-4 w-full bg-white text-black dark:text-white px-4 border border-gray-300 hover:border-blue-500 transition"
                                            placeholder="ایمیل خود را وارد کنید"
                                            name="gmail"
                                        />
                                        <ErrorMessage
                                            name="gmail"
                                            component={"p"}
                                            className="text-red-600 font-semibold"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-bold text-right mb-2 text-gray-700 dark:text-white">
                                            رمز عبور جدید
                                        </label>
                                        <Field
                                            className="rounded-3xl h-11 text-lg mb-4 w-full bg-white text-black dark:text-white px-4 border border-gray-300 hover:border-blue-500 transition"
                                            placeholder="رمز عبور جدید خود را وارد کنید"
                                            type="password"
                                            name="password"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component={"p"}
                                            className="text-red-600 font-semibold"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="primary"
                                    className="w-full h-12 text-lg bg-blue-500 text-white rounded-3xl font-bold"
                                >
                                    تایید
                                </button>
                            </Form>
                        </Formik>
                    </div>
                )}
                <Link to={"/login"}>
                    <p
                        type="primary"
                        className="w-full mt-3 h-12 text-lg py-2 px-4 border-gray-300 dark:bg-[#041124] text-blue-500 rounded-3xl font-bold hover:underline"
                    >
                        اگر حساب کاربری دارید وارد شوید
                    </p>
                </Link>
                <Link to={"/"}>
                    <Button
                        type="primary"
                        className="w-36 mt-8 h-12 text-lg py-2 px-4 border-gray-300   bg-white text-blue-500 rounded-3xl font-bold"
                    >
                        صفحه اصلی
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export { Register };