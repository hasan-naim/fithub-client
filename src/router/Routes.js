import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Exercises from "../pages/Exercises/Exercises";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyExercises from "../pages/MyExercises/MyExercises";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/exercises",
        element: <Exercises></Exercises>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myexercises",
        element: <MyExercises></MyExercises>,
      },
    ],
  },
]);

export default router;
