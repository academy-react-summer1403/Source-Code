import { useState } from "react";
import { ForgotPassword } from "./ForgetPass/ForgetPassword";
import { Register } from "./Register";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Login } from "../../core/services/api/auth/Login/Login";
import { toast } from "react-toastify";
import { setItem } from "../../core/services/common/storage.services";
import { getProfile } from "../../core/services/api/user";

const LoginPage = () => {
    const [currentTab, setCurrentTab] = useState("1");
    const [showRegister, setShowRegister] = useState(false);

    if (showRegister) {
        return <Register onBack={() => setShowRegister(false)} />;
    }

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
        const { isSuccess, message } = await Login(values);
        if (isSuccess) {
            const profile = await getProfile();
            if (profile) {
                console.log("User profile:", profile);
            } else {
                console.log("Failed to fetch profile");
            }
        }
        isSuccess ? toast.success(message) : toast.error(message);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen justify-center items-start bg-white dark:bg-[#041124]">
            <div className="flex flex-col w-full md:w-1/2 justify-start items-center p-5 md:p-10 text-black dark:bg-[#041124] mt-11">
                {/* Tabs */}
                <div className="flex flex-col md:flex-row  justify-between w-full max-w-md mb-4 dark:bg-[#041124]">
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/2 flex flex-col items-center ${currentTab === "1" ? "text-black font-bold" : "text-gray-400"
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

                    {/* Space between tabs */}
                    <div className="h-2 md:h-0 md:w-6" />

                    {/* Second tab */}
                    <div
                        className={`cursor-pointer text-center pb-1 w-full md:w-1/2 flex flex-col items-center ${currentTab === "2" ? "text-black font-bold" : "text-gray-400"
                            }`}
                        onClick={() => setCurrentTab("2")}
                    >
                        <div
                            className={`h-2 rounded-2xl w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"
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
                        <h2 className="text-3xl font-bold text-right dark:text-white">
                            خوش برگشتی! 👋
                        </h2>
                        <p className="text-gray-600 text-lg text-right mt-5 w-full md:w-96 dark:text-white">
                            لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب
                            کاربری وارد کنید
                        </p>
                        <Formik
                            initialValues={{
                                phoneOrGmail: "",
                                password: "",
                                rememberMe: false,
                            }}
                            onSubmit={(values) => {
                                onSubmit(values);
                            }}
                        >
                            <Form>
                                <div>
                                    <label className="block mt-8 text-lg font-bold text-right text-gray-700 dark:text-white">
                                        شماره همراه یا ایمیل
                                    </label>
                                    <Field
                                        className="mt-2 text-lg rounded-3xl w-full bg-white text-black px-4 py-2 border border-gray-300 dark:text-white"
                                        placeholder="شماره همراه یا ایمیل خود را وارد کنید"
                                        name="phoneOrGmail"
                                    />
                                    <ErrorMessage
                                        name="phoneOrGmail"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-2 text-lg font-bold text-right text-gray-700 dark:text-white">
                                        رمزعبور
                                    </label>
                                    <Field
                                        type="password"
                                        className="mt-4 rounded-3xl w-full text-lg bg-white text-black px-4 py-2 border border-gray-300 dark:text-white"
                                        placeholder="رمز عبور خود را وارد کنید"
                                        name="password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component={"p"}
                                        className="text-red-600 font-semibold"
                                    />
                                </div>
                                <div className="flex items-center mt-2 justify-between w-full">
                                    <div className="flex items-center">
                                        <Field
                                            type="checkbox"
                                            name="rememberMe"
                                            id="rememberMe"
                                            className="mr-2"
                                        />
                                        <label
                                            htmlFor="rememberMe"
                                            className="text-lg mt-2 pr-1 font-bold text-black dark:text-white"
                                        >
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>
                                    <Link
                                        to={"/auth/forgetPass"}
                                        className="text-blue-500 mt-2 text-lg hover:underline font-bold dark:text-white"
                                    >
                                        رمز عبور را فراموش کردید؟
                                    </Link>
                                </div>
                                <button
                                    className="mt-5 flex items-center justify-center text-center h-11 bg-blue-500 text-white rounded-3xl w-full font-bold dark:text-white"
                                    type="submit"
                                >
                                    ورود به حساب
                                </button>
                            </Form>
                        </Formik>

                        <div className="mt-2 w-full font-bold">
                            <p className="text-lg mt-2 dark:text-white">
                                حساب کاربری ندارید؟{" "}
                                <Link to={"/auth/signup"}>
                                    <span
                                        className="text-blue-500 hover:underline font-bold text-lg dark:text-white"
                                        onClick={() => setShowRegister(true)}
                                    >
                                        ایجاد حساب کاربری
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 w-full">
                            <Link to={"/"}>
                                <button
                                    type="button"
                                    className="w-32 mt-5 md:w-[141px] text-lg border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-11 font-bold dark:text-white"
                                >
                                    صفحه اصلی
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export { LoginPage };