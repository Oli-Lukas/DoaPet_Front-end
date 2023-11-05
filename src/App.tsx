import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/Home";

import "./App.scss";
import UserSignup from "./pages/UserSignup";
import OngSignup from "./pages/OngSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/user-signup",
    element: <UserSignup />
  },
  {
    path: "/ong-signup",
    element: <OngSignup />
  },
  {
    path: "/home",
    element: <HomePage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
