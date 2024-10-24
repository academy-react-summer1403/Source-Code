import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function EnterCodeForm({
  onSubmitCode,
  onResendCode,
  onRegister,
}) {
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const resendCode = () => {
    if (canResend) {
      onResendCode();
      setTimeLeft(120);
      setCanResend(false);
    }
  };

  const validationSchema = Yup.object({
    verificationCode: Yup.string()
      .required("کد تایید الزامی است")
      .length(5, "کد تایید باید ۵ رقمی باشد"),
  });

  return (
    <div
      className="container bg-slate-50 w-full max-w-xs flex justify-center rounded-2xl p-6"
      dir="rtl"
    >
      <Formik
        initialValues={{ verificationCode: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitCode(values.verificationCode)}
      >
        {({ isSubmitting }) => (
          <Form
            className="container bg-slate-50 z-10 p-4 rounded-2xl shadow-inner w-full max-w-xs flex flex-col justify-center absolute top-[30%] left-[40%] transform-translate(-50%, -50%)"
            dir="rtl"
          >
            <div className="mb-4 ">
              <div className="flex flex-row justify-between gap-8">
                <p className="font-semibold text-center">کد تاییدیه</p>
                <button
                  type="button"
                  className="text-white bg-gray-200 h-7 w-7 rounded-lg items-center hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  <img
                    className="cross w-5 h-5 mx-auto"
                    src="/src/components/form/icons8-cross.svg"
                  ></img>
                </button>
              </div>
              <div className="code flex justify-center gap-2 h-14">
                <Field
                  name="verificationCode1"
                  type="text"
                  placeholder=""
                  className="border rounded-2xl w-11 py-2 px-3 mt-4 text-xs text-gray-700"
                />
                <Field
                  name="verificationCode2"
                  type="text"
                  placeholder=""
                  className="border rounded-2xl w-11 py-2 px-3 mt-4 text-xs text-gray-700"
                />
                <Field
                  name="verificationCode3"
                  type="text"
                  placeholder=""
                  className="border rounded-2xl w-11 py-2 px-3 mt-4 text-xs text-gray-700"
                />
                <Field
                  name="verificationCode4"
                  type="text"
                  placeholder=""
                  className="border rounded-2xl w-11 py-2 px-3 mt-4 text-xs text-gray-700"
                />
                <Field
                  name="verificationCode5"
                  type="text"
                  placeholder=""
                  className="border rounded-2xl w-11 py-2 px-3 mt-4 text-xs text-gray-700"
                />
                <ErrorMessage
                  name="verificationCode"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>
            <div className="text-center mb-4">
              {canResend ? (
                <button
                  type="button"
                  onClick={resendCode}
                  className="text-blue-500 text-xs underline"
                >
                  ارسال مجدد کد
                </button>
              ) : (
                <p className="text-xs">{timeLeft}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white text-xs rounded-full p-2 px-6"
              >
                ساخت حساب کاربری
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs">
                کد ارسال نشد؟{" "}
                <button
                  type="button"
                  onClick={onRegister}
                  className="text-blue-500 underline"
                >
                  ارسال دوباره
                </button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
