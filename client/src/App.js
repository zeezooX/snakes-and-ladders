import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Home from "./pages/homePage/Home";
import axios from "axios";
import Mock from "./pages/mockPage/Mock";
const App = () => {
  axios.defaults.baseURL = "http://localhost:8080/";
  const ProtectedRoute = ({ children }) => {
    if (!sessionStorage.getItem("authenticated")) {
      console.log(sessionStorage.getItem("authenticated"));
      return <Navigate to="/login" />;
    } 
    else return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/mock",
      element:<Mock></Mock>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
