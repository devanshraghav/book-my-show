import React from "react";
import { Link } from "react-router-dom";
import { defaultImageUrl } from "../../utils/constants";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start px-1 md:px-3 gap-2">
        <div className="h-80">
          <img
            src={defaultImageUrl + props.poster_path}
            alt="posters"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.original_title}
        </h3>
        <p
          className={`text-sm  ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default Poster;
