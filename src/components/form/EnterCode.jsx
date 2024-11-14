import { useState, Fragment } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import TheRegister from "../Register/TheRegister";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

// eslint-disable-next-line no-unused-vars
export default function EnterCodeForm({ isOpen, onClose }) {
  const [isTheRegisterOpen, SetIsTheRegisterOpen] = useState(false);
  // const openRegister = () => SetIsTheRegisterOpen(true);
  const openRegister = () => {
    SetIsTheRegisterOpen(true);
    console.log("TheRegister modal opened:", isTheRegisterOpen); // بررسی وضعیت
  };

  const [timeLeft, setTimeLeft] = useState(120);
  // const [canResend, setCanResend] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);

  const params = useParams();
  const verrify = async (code) => {
    const response = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/VerifyMessage",
      code
    );
    if (response.status === 200) {
      openRegister();
    }
    console.log(response);
    return response;
  };
  const handleSubmit = async (values) => {
    const phone = localStorage.getItem("phoneNumber");
    const obj = {
      verifyCode: values.verifyCode,
      phoneNumber: phone,
    };
    const result = await verrify(obj);
    console.log(values);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <Fragment>
      {/* <ToastContainer /> */}
      <Formik
        initialValues={{ verifyCode: "" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* <div className="w-full h-full fixed z-[99] bg-[rgba(0,0,0,0.6)] left-0 top-0"> */}
        <Form
          className="container bg-slate-50 z-[99] w-full max-w-xs flex justify-center rounded-2xl fixed top-[30%] left-[40%] transform-translate(-50%, -50%)"
          dir="rtl"
        >
          <div className="p-6 border-gray-800 rounded-2xl">
            <div className="flex flex-row justify-between gap-8">
              <p className="enter font-semibold h-4"> ساخت حساب کاربری</p>
            </div>
            <div className="f-1 mt-6 p-1">
              <Field
                className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                name="verifyCode"
                type="text"
                placeholder="شماره موبایل"
              />
            </div>
            <div className="btn-login py-3 items-center text-center">
              <button
                type="submit"
                className="mb ud zu aen akl asc asn axa axj axs bbl bkb bqh bqi bqk bqr bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
              >
                دریافت کد تایید
              </button>
              {isTheRegisterOpen && (
                <TheRegister
                  isOpen={isTheRegisterOpen}
                  onClose={() => SetIsTheRegisterOpen(false)}
                />
              )}
            </div>
            <div className="forget items-center text-center">
              <p className="awi axa axs ayu text-xs">
                حساب کاربری دارید؟{" "}
                <a className="axj azl bmo text-xs underline">{formattedTime}</a>
              </p>
            </div>
          </div>
        </Form>
        {/* </div> */}
      </Formik>
    </Fragment>
  );
}
