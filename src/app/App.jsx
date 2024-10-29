import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import LayOut from "../components/layout/LayOut";
import LayOutB from "../components/layout/LayOutB";
import Courses from "../screens/Courses/Courses";
import LayOutP from "../components/layout/LayOutP";
import Panel from "../screens/Panel/Panel";
import Blog from "../screens/Blog/Blog";
import Register from "../components/Register/Register";

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
          path: "/blog",
          element: <Blog />,
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
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <>
      <toast />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
