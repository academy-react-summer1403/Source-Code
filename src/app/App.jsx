// import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import LayOut from "../components/layout/LayOut";
import LoginModal from "../components/form/LoginModal";
import ForgetPassword from "../components/form/ForgetPassword";
import EnterCode from "../components/form/EnterCode";
import { Toaster } from "react-hot-toast";
function App() {
  // const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },

    { path: "/login", element: <LoginModal /> },
    {
      path: "/forget",
      element: <ForgetPassword />,
    },
    {
      path: "/EnterCode",
      element: <EnterCode />,
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
