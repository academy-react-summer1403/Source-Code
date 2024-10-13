// import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import LayOut from "../components/layout/LayOut";

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
    {
      path: "/",
      element: <loginModal />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
