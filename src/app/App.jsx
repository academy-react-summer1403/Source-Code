import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import LayOut from "../components/layout/LayOut";
import LayOutB from "../components/layout/LayOutB";
import Courses from "../screens/Courses/Courses";
import LayOutP from "../components/layout/LayOutP";
import Panel from "../screens/Panel/Panel";
import CoursePage from "../components/CourseDetails/CoursePage";
import { Toaster } from "react-hot-toast";
// import Blog from "../screens/Blog/Blog";
import Register from "../components/Register/Register";
import { LoginUser } from "../core/services/api/login-user";
import { useEffect, useState } from "react";
import { setItem } from "../core/services/common/storage.services";
import { getProfile } from "../core/services/api/user";
import LayOutH from "../components/layout/LayOutH";
import { SignUp } from "../screens/SignUp";
import { ForgetPass } from "../screens/ForgetPass";
// import TheRegister from "../components/Register/TheRegister";
import ForgetPassword from "../components/form/ForgetPassword";
import MainComponent from "../components/Blog/Blogs";
import BlogDetail from "../components/Blog/BlogDetail";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOutB />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },

    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/CourseDetails/:id",
          element: <CoursePage />,
        },
        {
          path: "/blog",
          element: <MainComponent />,
        },
        {
          path: "/blogDetail/:id",
          element: <BlogDetail />,
        },
      ],
    },
    {
      path: "/",
      element: <LayOutH />,
      children: [
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/forgetpass",
          element: <ForgetPass />,
        },
      ],
    },
    {
      path: "/",
      element: <LayOutP />,
      children: [
        {
          path: "/Panel",
          element: <Panel />,
        },
      ],
    },
  ]);

  const loginUser = async () => {
    const userObj = { phoneOrGmail: "", password: "", rememberMe: true };
    const user = await LoginUser(userObj);

    setItem("token", user.token);
  };

  const getProfileFunc = async () => {
    const profile = await getProfile();
    if (profile) {
      console.log("User profile:", profile);
    } else {
      console.log("Failed to fetch profile");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      loginUser();
    } else {
      getProfileFunc();
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <>
      <Toaster />

      <RouterProvider router={router} />

    </>
  );


}

export default App;
