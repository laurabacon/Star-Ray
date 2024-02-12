import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
// import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
    //   {
    //     path: "/Login",
    //     element: <Login />,
    //   },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
