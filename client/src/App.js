import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Home from "./pages/homePage/Home";
import axios from "axios";
import Game from "./pages/game-page";
import Mock from "./pages/mockPage/Mock";
//import RetrieveGames from "./components/retrieveGames";

const App = () => {
  axios.defaults.baseURL = "http://localhost:8080/";
  const ProtectedRoute = ({ children }) => {
    if (!sessionStorage.getItem("authenticated")) {
      console.log(sessionStorage.getItem("authenticated"));
      return <Navigate to="/login" />;
    } else return children;
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
      path: "/game",
      element: <Game />,
    },
    {
      path: "/mock",
      element: <Mock />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
