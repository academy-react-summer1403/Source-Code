import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ForgetPass } from "../../../core/services/api/auth/Forgetpass/ForgetPass";
import { toast } from "react-toastify";
import { ResetConfirmValue } from "../../../core/services/api/auth/Forgetpass/ResetConfirmValue";
import { setItem } from "../../../core/services/common/storage.services";
import { ResetPassword } from "../../../core/services/api/auth/Forgetpass/ResetPassword";

const InputField = ({ label, placeholder }) => (
    <div className="mb-4">
        <label className="block text-lg font-bold text-right mb-2 text-gray-700">
            {label}
        </label>
        <Input
            className="rounded-3xl w-full bg-white text-lg text-black"
            placeholder={placeholder}
        />
    </div>
);

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

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState("1");

    const onSubmit = async (values) => {
        const res = await ForgetPass({ email: values.email });
        // setCurrentTab("2");
        if (res.success === true)
            toast.success("ایمیل با موفقیت فراستاده شد!", {
                position: "top-center",
            });
    };

    const onSubmitPassChange = async (values) => {
        const res = await ResetPassword({ newPassword: values.newPassword });
        console.log(res);
        if (res.success === true) {
            toast.success("رمز تغییر کرد! میریم به صفحه لاگین🚶‍♂️", {
                position: "top-center",
                autoClose: 2000,
            });
            setTimeout(() => {
                navigate("/login");
            }, 2500);
        }
    };

    const configValue = async () => {
        if (window.location.pathname.includes("forgetPass/")) {
            const configVal = await ResetConfirmValue();
            setCurrentTab("2");

            if (configVal) {
                console.log(configVal);

                if (configVal.success === true) {
                    toast.success("لینک تغییر رمز معتبر بود! حالا رمزتو عوض کن🎉", {
                        position: "top-center",
                    });
                    setItem("resetValue", configVal.message);
                    setItem("userId", configVal.id);
                }
            }
        }
    };

    useEffect(() => {
        configValue();
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen justify-center items-start bg-white  dark:bg-[#041124]">
            <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col justify-center items-center p-11 sm:p-5 md:p-10 lg:p-12 xl:p-14 2xl:p-16 text-black mt-9">
                {/* Tabs */}
                <div className="flex flex-col md:flex-row justify-between w-full max-w-lg mb-4">
                    {/* First tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/2 flex flex-col items-center ${currentTab === "1" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("1")}
                    >
                        <div
                            className={`h-2  rounded-2xl w-full ${currentTab === "1" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white ">
                            وارد کردن ایمیل
                        </span>
                    </div>

                    {/* Space between tabs (hidden in mobile view) */}
                    <div className="hidden md:block w-4" />

                    {/* Second tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/2 flex flex-col items-center ${currentTab === "2" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("2")}
                    >
                        <div
                            className={`h-2  rounded-2xl w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            تایید کد ارسال شده
                        </span>
                    </div>
                </div>

                {/* Tab contents */}
                {currentTab === "1" && (
                    <div className="w-full max-w-lg text-center mt-14">
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={(values) => {
                                onSubmit(values);
                            }}
                        >
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-lg font-bold text-right mb-2 text-gray-700">
                                        ایمیل
                                    </label>
                                    <Field
                                        className="rounded-3xl w-full bg-white text-lg text-black px-4 py-2 border border-gray-300 dark:text-white"
                                        placeholder="ایمیل خود را وارد کنید"
                                        name="email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-11 text-lg bg-blue-500 text-white rounded-3xl font-bold mt-3"
                                >
                                    ارسال لینک
                                </button>
                            </Form>
                        </Formik>

                        <Button
                            className="w-32 h-11 text-lg mt-8 border border-solid border-gray-300 text-blue-500 rounded-3xl font-bold"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            بازگشت
                        </Button>
                    </div>
                )}

                {currentTab === "2" && (
                    <div className="w-full max-w-md text-center">
                        <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-2 text-right mt-11">
                            رمز عبور جدید!
                        </h2>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-6 w-80 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] 2xl:w-[500px] text-right text-gray-500 mt-8">
                            رمز عبور جدید خود را وارد کنید
                        </p>
                        <Formik
                            initialValues={{
                                newPassword: "",
                                newPasswordRepeat: "",
                            }}
                            onSubmit={(values) => {
                                onSubmitPassChange(values);
                            }}
                        >
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-lg font-bold text-right mb-2 text-gray-700">
                                        رمز عبور جدید
                                    </label>
                                    <Field
                                        className="rounded-3xl w-full bg-white text-lg text-black px-4 py-2 border border-gray-300 hover:border-blue-600 dark:text-white"
                                        placeholder="رمز عبور خود را وارد کنید"
                                        name="newPassword"
                                    />
                                    <ErrorMessage
                                        name="newPassword"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-lg font-bold text-right mb-2 text-gray-700">
                                        تکرار رمز عبور جدید
                                    </label>
                                    <Field
                                        className="rounded-3xl w-full bg-white text-lg text-black px-4 py-2 border border-gray-300 hover:border-blue-600 dark:text-white"
                                        placeholder="تکرار رمز عبور خود را وارد کنید"
                                        name="newPasswordRepeat"
                                    />
                                    <ErrorMessage
                                        name="newPasswordRepeat"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-12  mt-6 text-lg bg-blue-500 text-white rounded-3xl font-bold"
                                >
                                    تایید رمز عبور
                                </button>
                            </Form>
                        </Formik>

                        <Button
                            className="w-32 h-11 text-lg  mt-8 border border-solid border-gray-300 text-blue-500 rounded-3xl font-bold"
                            onClick={() => setCurrentTab("1")}
                        >
                            بازگشت
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export { ForgotPassword };