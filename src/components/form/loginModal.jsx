/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// import React from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../form/ForgetPassword";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { LoginUser } from "../../core/services/api/login-user";
import toast from "react-hot-toast";

export default function LoginModal({ isOpen, onClose }) {
  // const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
  if (!isOpen) return null;

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/EnterCode");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const validationSchema = Yup.object({
    phoneOrGmail: Yup.string()
      .required("ایمیل یا شماره موبایل الزامی است")
      .matches(
        /^(\+98|0)?9\d{9}$|^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "فرمت ایمیل یا شماره موبایل صحیح نیست"
      ),
    password: Yup.string().required("رمز عبور الزامی است"),
  });

  const handleLogin = async (values) => {
    const { response, isSuccess, message } = await LoginUser(values);
    isSuccess ? toast.success(message) : toast.error(message);
  };

  return (
    <>
      {isModalOpen ? (
        <ForgetPassword isOpen={isModalOpen} onClose={closeModal} />
      ) : (
        <Formik
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors }) => (
            <Form
              className="container bg-slate-50 z-10 w-full max-w-xs flex justify-center rounded-2xl absolute top-[30%] left-[40%] transform-translate(-50%, -50%)"
              dir="rtl"
            >
              <div className="p-6 border-gray-800 rounded-2xl">
                <div className="flex flex-row justify-between gap-8">
                  <p className="enter font-semibold h-4">ورود به حساب</p>
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-white bg-gray-200 h-7 w-7 rounded-lg items-center hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                  >
                    <img
                      className="cross w-5 h-5 mx-auto"
                      src="/src/components/form/icons8-cross.svg"
                    ></img>
                  </button>
                </div>
                <div className="f-1 mt-6 p-1">
                  <Field
                    className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                    id="phoneOrGmail"
                    name="phoneOrGmail"
                    type="text"
                    placeholder="ایمیل یا شماره موبایل"
                  ></Field>
                  <ErrorMessage
                    name="phoneOrGmail"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="f-2 py-1">
                  <Field
                    className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="رمز عبور"
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="check flex flex-nowrap justify-between gap-3 py-2">
                  <Field
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="oh sn aeg agr azl bpa"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ka ly axa axs ayy font-serif text-xs"
                  >
                    من را به خاطر بسپار
                  </label>
                  <a
                    onClick={() => {
                      openModal();
                    }}
                    href="#"
                    className="changePassword font-serif text-xs underline"
                  >
                    رمز عبور را فراموش کردم
                  </a>
                  {/* {isForgetPasswordOpen && (
                  <ForgetPassword
                    isOpen={isForgetPasswordOpen}
                    onClose={() => setIsForgetPasswordOpen(true)}
                  />
                )} */}
                </div>
                {errors.apiError && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.apiError}
                  </div>
                )}
                <div className="btn-login py-3 items-center text-center">
                  <button
                    // onClick={goToAbout}
                    type="submit"
                    // disabled={isSubmitting}
                    className="mb ud zu aen akl asc asn axa axj axs bbl bkb bqh bqi bqk bqr bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                  >
                    دریافت کد تائید
                  </button>
                </div>
                <div className="forget items-center text-center">
                  <p className="awi axa axs ayu text-xs">
                    حساب کاربری ندارید؟{" "}
                    <a href="#" className="axj azl bmo text-xs underline">
                      ثبت نام
                    </a>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}