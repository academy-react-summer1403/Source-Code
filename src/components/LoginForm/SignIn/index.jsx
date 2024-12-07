import React, { useState } from "react";
import { ForgotPassword } from "./ForgetPass/ForgetPassword";
import { LoginPanel } from "./LoginPanel";
import { Register } from "./Register";

const LoginPage = () => {
    const [currentTab, setCurrentTab] = useState("1");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    if (showRegister) {
        return <Register onBack={() => setShowRegister(false)} />;
    }

    if (showForgotPassword) {
        return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen justify-center items-start bg-white  dark:bg-[#041124]">
            <div className="flex flex-col w-full md:w-1/2 justify-start items-center p-5 md:p-10 text-black  dark:bg-[#041124]">
                {/* Tabs */}
                <div className="flex justify-between w-full max-w-md mb-4  dark:bg-[#041124]">
                    {/* First tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-1/2 flex flex-col items-center ${currentTab === "1" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("1")}
                    >
                        <div
                            className={`h-1 w-full ${currentTab === "1" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            وارد کردن شماره همراه
                        </span>
                    </div>

                    <div className="w-6" />

                    {/* Second tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-1/2 flex flex-col items-center ${currentTab === "2" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("2")}
                    >
                        <div
                            className={`h-1 w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"
                                }`}
                        />
                        <span className="mt-2 min-h-[30px] dark:text-white">
                            تایید کد ارسال شده دو مرحله‌ای
                        </span>
                    </div>
                </div>

                {/* Content of the tabs */}
                {currentTab === "1" && (
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center mt-14">
                        <h2 className="text-2xl font-bold text-right dark:text-white">
                            خوش برگشتی!
                        </h2>
                        <p className="text-gray-600 text-sm text-right mt-3 w-full md:w-96 dark:text-white">
                            لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب
                            کاربری وارد کنید.
                        </p>
                        <label className="block mt-5 text-sm font-bold text-right text-gray-700  dark:text-white">
                            شماره همراه یا ایمیل
                        </label>
                        <input
                            className="mt-4 rounded-3xl w-full bg-white text-black px-4 py-2 border border-gray-300  dark:text-white"
                            placeholder="شماره همراه یا ایمیل خود را وارد کنید"
                        />
                        <label className="block mt-2 text-sm font-bold text-right text-gray-700  dark:text-white">
                            رمزعبور
                        </label>
                        <input
                            type="password"
                            className="mt-4 rounded-3xl w-full bg-white text-black px-4 py-2 border border-gray-300  dark:text-white"
                            placeholder="رمز عبور خود را وارد کنید"
                        />
                        <div className="flex items-center mt-2 justify-between w-full">
                            <div className="flex items-center">
                                <input type="checkbox" id="rememberMe" className="mr-2" />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-sm pr-1 font-bold text-black  dark:text-white"
                                >
                                    مرا به خاطر بسپار
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline text-sm font-bold  dark:text-white"
                                onClick={() => setShowForgotPassword(true)}
                            >
                                رمز عبور را فراموش کردید؟
                            </a>
                        </div>
                        <button
                            className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-full font-bold  dark:text-white"
                            onClick={() => setCurrentTab("2")}
                        >
                            ورود به حساب
                        </button>
                        <div className="mt-2 w-full font-bold">
                            <p className="text-sm  dark:text-white">
                                حساب کاربری ندارید؟
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline font-bold text-sm"
                                    onClick={() => setShowRegister(true)}
                                >
                                    ایجاد حساب کاربری
                                </a>
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 w-full">
                            <button
                                type="button"
                                className="w-28 md:w-[141px] text-sm border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-10 font-bold  dark:text-white"
                            >
                                صفحه اصلی
                            </button>
                        </div>
                    </div>
                )}

                {currentTab === "2" && (
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center mt-14">
                        <h2 className="text-2xl font-bold text-right  dark:text-white">
                            تایید کد دو مرحله‌ای!
                        </h2>
                        <p className="text-gray-600 text-sm mt-3  text-right  dark:text-white">
                            کد دو مرحله‌ای به شماره همراه شما ارسال شد. لطفا کد را وارد کنید.
                        </p>
                        <label className="block mt-8 text-sm font-bold text-right text-gray-700  dark:text-white">
                            کد دو مرحله ای
                        </label>
                        <input
                            className="mt-4 rounded-3xl h-9 w-full bg-white text-black px-4 py-2 border border-gray-300"
                            placeholder="کد دو مرحله‌ای خود را وارد کنید"
                        />
                        <button className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-full font-bold  dark:text-white">
                            ورود به حساب
                        </button>
                        <button
                            className="w-28 mt-4 text-sm border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-10 font-bold"
                            onClick={() => setCurrentTab("1")}
                        >
                            بازگشت
                        </button>
                    </div>
                )}
            </div>

            <div className="hidden md:flex w-full lg:w-1/2">
                <LoginPanel className="mt-0" />
            </div>
        </div>
    );
};

export { LoginPage };