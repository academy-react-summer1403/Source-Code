import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TheRegister() {
  // const navigate = useNavigate();

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,11}$/, "شماره موبایل معتبر نیست")
      .required("وارد کردن شماره موبایل الزامی است"),
    gmail: Yup.string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
    password: Yup.string()
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
      .required("وارد کردن رمز عبور الزامی است"),
  });

  const handleSubmit = async (values) => {
    // setSubmitting(true);
    try {
      const response = await axios.post(
        "https://classapi.sepehracademy.ir/api/Sign/Register",
        {
          phoneNumber: values.phoneNumber,
          gmail: values.gmail,
          password: values.password,
        }
      );
      if (response.status === 200) {
        toast.success(" ثبت نام با موفقیت انجام شد.");
        // navigate("/courses");
      }
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("ثبت نام موفق بود. لطفا دوباره تلاش کنید.");
    }
    // finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={{ phoneNumber: "", gmail: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full fixed z-[99] bg-[rgba(0,0,0,0.6)] left-0 top-0">
          <Form
            className="container bg-slate-50 z-[99] w-full max-w-xs flex justify-center rounded-2xl fixed top-[30%] left-[40%] transform-translate(-50%, -50%)"
            dir="rtl"
          >
            <div className="p-6 border-gray-800 rounded-2xl">
              <div className="flex flex-row justify-between gap-8">
                <p className="enter font-semibold h-4">ورود به حساب</p>
                <button
                  // onClick={onClose}
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
                  name="phoneNumber"
                  type="text"
                  placeholder=" شماره موبایل"
                ></Field>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="f-2 py-1">
                <Field
                  className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                  name="gmail"
                  type="email"
                  placeholder="ایمیل"
                ></Field>
                <ErrorMessage
                  name="gmail"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="f-2 py-1">
                <Field
                  className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder=" رمز عبور"
                ></Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="check flex flex-nowrap gap-2 py-2">
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
              </div>
              <div className="btn-login py-3 items-center text-center">
                <button
                  type="submit"
                  className="mb ud zu aen akl asc asn axa axj axs bbl bkb bqh bqi bqk bqr bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  ورود به حساب
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
