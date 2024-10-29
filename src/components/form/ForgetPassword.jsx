import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function ForgetPassword({ isOpen, onClose, ConfigValue }) {
  if (!isOpen) return null;

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "رمز عبور حداقل باید ۸ کاراکتر باشد")
      .required("رمز عبور الزامی است"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد")
      .required("تأیید رمز عبور الزامی است"),
  });

  const handleSubmit = async (fields) => {
    try {
      const resetLink = await ConfigValue();
      const response = await axios.post(
        "https://classapi.sepehracademy.ir/api/Sign/Reset",
        {
          userId: fields.userId,
          resetValue: resetLink,
          newPassword: fields.newPassword,
        }
      );

      if (response.status !== 200) {
        throw new Error("مشکلی رخ داده است");
      } else toast.success("رمز عبور باموفقیت تنظیم شد");
      onClose();
    } catch (error) {
      toast.error("خطا: " + error.message);
    }
  };

  return (
    <Formik
      initialValues={{ userId: "", newPassword: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form
          className="container  bg-white shadow-inner z-10 w-full max-w-xs flex justify-center rounded-2xl absolute  top-[30%] left-[40%] transform-translate(-50%, -50%)"
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
                ></img>
              </button>
            </div>
            <div className="f-1 mt-6 p-1">
              <Field
                className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                name="userId"
                type="text"
                placeholder="ایمیل یا شماره موبایل"
              ></Field>
            </div>
            <div className="f-2 py-1">
              <Field
                name="newPassword"
                type="password"
                className={`appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs ${
                  errors.newPassword && touched.newPassword
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="رمز عبور"
              ></Field>
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="f-3 py-1">
              <Field
                id="confirmPassword"
                type="password"
                className={`appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs ${
                  errors.resetValue && touched.resetValue
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="تکرار رمز عبور"
              ></Field>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="check flex flex-nowrap justify-center py-2">
              <Field
                name="rememberMe"
                type="checkbox"
                className="oh sn aeg agr azl bpa"
              />
              <label
                htmlFor="rememberMe"
                className="ka ly axa axs ayy font-serif text-xs px-2"
              >
                من را به خاطر بسپار
              </label>
            </div>
            <div className="btn-login py-3 items-center text-center">
              <button
                type="submit"
                className="code bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
              >
                دریافت کد تائید
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
