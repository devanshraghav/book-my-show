import {createContext} from "react";

const MovieContext = createContext({
  id: 0,
  original_title: "",
  overview: "",
  backdrop_path: "",
  poster_path: "",
});

export default MovieContext;
