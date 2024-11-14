import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EnterCodeForm from "../form/EnterCode";

export default function Register() {
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showEnterCodeModal, setShowEnterCodeModal] = useState(false);

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^09\d{9}$/, "شماره موبایل باید معتبر باشد و با 09 شروع شود")
      .required("شماره موبایل الزامی است"),
  });

  const handleSubmit = async (value) => {
    setMessage("");
    try {
      const response = await axios.post(
        "https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage",
        {
          phoneNumber: value.phoneNumber,
        }
      );
      console.log("کد تایید به شماره موبایل ارسال شد.");

      if (response.status === 200) {
        setMessage("کد تایید با موفقیت ارسال شد.");
        localStorage.setItem("phoneNumber", value.phoneNumber);
        toast.success("کد تایید با موفقیت ارسال شد.");
        setShowModal(false);
        setShowEnterCodeModal(true);
      } else {
        setMessage("ارسال کد تایید ناموفق بود. دوباره تلاش کنید.");
        toast.error("ارسال کد تایید ناموفق بود. دوباره تلاش کنید.");
      }
    } catch (error) {
      setMessage("ارسال کد تایید ناموفق بود. دوباره تلاش کنید.");
      toast.error("ارسال کد تایید ناموفق بود. دوباره تلاش کنید.");
    }
  };

  return (
    <div>
      <ToastContainer />
      {showModal && (
        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="w-full h-full fixed z-[99] bg-[rgba(0,0,0,0.6)] left-0 top-0">
              <Form
                className="container bg-slate-50 z-[99] w-full max-w-xs flex justify-center rounded-2xl fixed top-[30%] left-[40%] transform-translate(-50%, -50%)"
                dir="rtl"
              >
                <div className="p-6 border-gray-800 rounded-2xl">
                  <div className="flex flex-row justify-between gap-8">
                    <p className="enter font-semibold h-4"> ساخت حساب کاربری</p>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
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
                      placeholder="شماره موبایل"
                    ></Field>
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="btn-login py-3 items-center text-center">
                    <button
                      type="submit"
                      className="mb ud zu aen akl asc asn axa axj axs bbl bkb bqh bqi bqk bqr bg-blue-500 text-cyan-50 text-xs rounded-full p-3 px-10 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-center inline-flex me-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                    >
                      دریافت کد تایید
                    </button>
                  </div>
                  <div className="forget items-center text-center">
                    <p className="awi axa axs ayu text-xs">
                      حساب کاربری دارید؟{" "}
                      <a className="axj azl bmo text-xs underline">وارد شوید</a>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
      {showEnterCodeModal && (
        <EnterCodeForm closeModal={() => setShowEnterCodeModal(false)} />
      )}
    </div>
  );
}

// function Register() {
//   // if (!isOpen) return null;

//   const [phoneNumber, setMobileNumber] = useState("");
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [timer, setTimer] = useState(120);
//   const [code, setCode] = useState(["", "", "", "", ""]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (isCodeSent && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isCodeSent, timer]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(
//       "https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage",
//       {
//         phoneNumber: phoneNumber,
//       }
//       // isSuccess ? toast.success(message) : toast.error(message);
//     );

//     console.log("کد تایید به شماره موبایل ارسال شد.");
//     setIsCodeSent(true);
//     setErrorMessage("");
//   };

//   const handleCodeChange = (index, value) => {
//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);
//   };

//   const handleCodeSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         `https://classapi.sepehracademy.ir/api/Sign/VerifyMessage`,
//         {
//           phoneNumber: phoneNumber,
//           verifyCode: code.join(""),
//         }
//       );

//       if (response.status === 200) {
//         setIsCodeConfirmed(true);
//         setErrorMessage("");
//       }
//     } catch (error) {
//       setErrorMessage("کد تأیید نادرست است.");
//     }

//     /*if (code.join('') === '12345') {
//       setIsCodeConfirmed(true);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('کد تأیید نادرست است.');
//     }*/
//   };

//   const handleRegistrationSubmit = async (e) => {
//     e.preventDefault();

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       setErrorMessage("ایمیل معتبر نیست.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage("رمز عبور و تایید رمز عبور باید یکی باشند.");
//       return;
//     }

//     await axios.post(`https://classapi.sepehracademy.ir/api/Sign/Register`, {
//       password,
//       gmail: email,
//       phoneNumber: phoneNumber,
//     });

//     console.log("اطلاعات ثبت‌نام ارسال شد.");
//     setErrorMessage("");
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
//   };

//   return (
//     <Formik
//       initialValues={{ email: "", phoneNumber: "" }}
//       onSubmit={handleRegistrationSubmit}
//     >
//       <div className="w-full h-full fixed z-[99] bg-[rgba(0,0,0,0.6)] left-0 top-0">
//         <Form
//           className="container bg-slate-50 z-[99] w-full max-w-xs flex justify-center rounded-2xl fixed top-[30%] left-[40%] transform-translate(-50%, -50%)"
//           dir="rtl"
//         >
//           <div className="login-container">
//             <button className="close-btn" onClick={() => setIsCodeSent(false)}>
//               ×
//             </button>
//             {isCodeSent ? (
//               <>
//                 {isCodeConfirmed ? (
//                   <div>
//                     <h2>اطلاعات کاربری</h2>
//                     {errorMessage && (
//                       <p className="error-message">{errorMessage}</p>
//                     )}
//                     <Field
//                       type="email"
//                       placeholder="ایمیل"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                     <Field
//                       type="password"
//                       placeholder="رمز عبور"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <Field
//                       type="password"
//                       placeholder="تایید رمز عبور"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                     <button type="submit">ثبت‌نام</button>
//                   </div>
//                 ) : (
//                   <div>
//                     <h2>کد تاییدیه</h2>
//                     <p>
//                       کد به شماره {phoneNumber} ارسال شد.{" "}
//                       <a href="#">تغییر شماره</a>
//                     </p>
//                     <form onSubmit={handleCodeSubmit}>
//                       <div className="code-inputs">
//                         {code.map((value, index) => (
//                           <Field
//                             key={index}
//                             type="text"
//                             maxLength="1"
//                             value={value}
//                             onChange={(e) =>
//                               handleCodeChange(index, e.target.value)
//                             }
//                             required
//                           />
//                         ))}
//                       </div>
//                       <p>{formatTime(timer)}</p>
//                       <button type="submit">تایید کد</button>
//                     </form>
//                     {errorMessage && (
//                       <p className="error-message">{errorMessage}</p>
//                     )}
//                     <p>
//                       کد ارسال نشد؟ <a href="#">ارسال دوباره</a>
//                     </p>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div>
//                 <h2>ساخت حساب کاربری</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Field
//                     type="text"
//                     placeholder="شماره موبایل"
//                     value={phoneNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     required
//                   />
//                   <button type="submit">دریافت کد تایید</button>
//                 </form>
//                 <p>
//                   حساب کاربری دارید؟ <a href="../login">وارد شوید</a>
//                 </p>
//               </div>
//             )}
//           </div>
//         </Form>
//       </div>
//     </Formik>
//   );
// }

// export default Register;
