import { useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ResetPassword from "./ResetPassword";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ForgetPass1({ isOpen, onClose }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [configValue, setConfigValue] = useState("");

  const handleOpenResetPassword = () => setResetPasswordOpen(true);
  const handleCloseResetPassword = () => setResetPasswordOpen(false);
  if (!isOpen) return null;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  });

  const handleSubmit = async (fields) => {
    try {
      const response = await axios.post(
        "https://classapi.sepehracademy.ir/api/Sign/ForgetPassword",
        {
          email: fields.email,
          baseUrl: "https://localhost:5173/resetpassword",
        }
      );
      if (response.status !== 200) {
        throw new Error("مشکلی رخ داده است");
      } else {
        setConfigValue(response.data.ConfigValue);
        toast.success("ایمیل باموفقیت ارسال شد");
        onClose();
        handleOpenResetPassword();
      }
    } catch (error) {
      toast.error("خطا: " + error.message);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          baseUrl: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className="container bg-white shadow-inner z-10 w-full max-w-xs flex justify-center rounded-2xl absolute top-[30%] left-[40%] transform-translate(-50%, -50%)"
            dir="rtl"
          >
            <div className="bg-white p-5 border-gray-800 rounded-2xl">
              <div className="flex flex-row justify-between gap-8">
                <p className="enter font-semibold h-4">فراموشی رمز عبور</p>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-white bg-gray-200 h-7 w-7 rounded-lg items-center hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  <img
                    className="cross w-5 h-5 mx-auto"
                    src="/public/icons8-cross.svg"
                    alt="close"
                  />
                </button>
              </div>
              <div className="f-1 mt-6 p-1">
                <Field
                  className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                  name="email"
                  type="email"
                  placeholder="ایمیل"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-xs mt-2">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="btn-login py-3 items-center text-center">
                <button
                  onClick={handleOpenResetPassword}
                  type="submit"
                  className="code bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  دریافت کد تائید
                </button>
                <ResetPassword
                  isOpen={isResetPasswordOpen}
                  onClose={handleCloseResetPassword}
                  ConfigValue={configValue}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
