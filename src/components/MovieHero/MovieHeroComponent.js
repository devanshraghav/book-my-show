import React, { useContext } from "react";
import MovieInfo from "./MovieInfo";
import { defaultImageUrl } from "../../utils/constants";

// context
import MovieContext from "../Context/MovieContext";

const MovieHeroComponent = () => {
  const {movie} = useContext(MovieContext);
  return (
    <>
      <div>
        {/* Mobile */}
        <div className="relative md:hidden" style={{ height: "calc(180vw)" }}>
          {/* Movie Info */}
          <div className="absolute bottom-4 flex left-2 z-20">
            <MovieInfo />
          </div>
          {/* black bottom */}
          <div className="w-full h-56 bottom-0 absolute bg-black z-10 bg-opacity-96" />
          <img
            className="w-full h-full"
            src={defaultImageUrl + movie.poster_path}
          />
        </div>

        {/* Tablet */}
        <div
          className="hidden relative md:block lg:hidden"
          style={{ height: "calc(100vw)" }}
        >
          {/* black bottom */}
          <div className="w-full h-40 bottom-0 absolute bg-black bg-opacity-50" />
          {/* Movie Info */}
          <div className="absolute bottom-4 z-20">
            <MovieInfo />
          </div>
          <img
            className="w-full h-full"
            src={defaultImageUrl + movie.poster_path} />
        </div>

        {/* Pc */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          {/* Gradient */}
          <div
            className="absolute z-10 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgb(34, 34, 34,0.04) 97.47%, rgb(34, 34, 34) 100% )",
            }}
          />
          {/* Poster Image */}
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className=" w-64 h-96">
              <img
                className="w-full h-full rounded-lg"
                src={defaultImageUrl + movie.poster_path}
                />
            </div>
            {/* Movie Info */}
            <div>
              <MovieInfo />
            </div>
          </div>

          {/* Background Image */}
          <img
            src={defaultImageUrl + movie.backdrop_path}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHeroComponent;
