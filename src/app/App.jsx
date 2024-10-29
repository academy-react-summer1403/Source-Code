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
          path: "/CourseDetails",
          element: <CoursePage />,
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

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
