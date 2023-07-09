import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";

import Footer from "./components/Footer";

// Import pages
import Home from "./components/Pages/Home";
import Movie from "./components/Pages/Movie";
import Plays from "./components/Pages/Plays";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Context
import MovieContext from "./components/Context/MovieContext";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

const AppLayout = () => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });
  return (
    
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
      }}
    >
      <Outlet />
      <Footer />
    </MovieContext.Provider>
    
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/plays",
        element: <Plays />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
