import React, { useContext, useState } from "react";

import PaymentModal from "../PaymentModal/Payment";

// Context
import MovieContext from "../Context/MovieContext";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);
  const genre = movie.genres?.map(({ name }) => name).join(" • ");
  const language = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(" • ");

  const [isOpen,setIsOpen] = useState(false);
  const [price,setPrice] = useState(0);

  const rentMovies = () =>{
    setIsOpen(true);
    setPrice(149);
  }
  const buyMovies = () =>{
    setIsOpen(true);
    setPrice(599);
  }
  return (
    <>
      <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 md:px-4 ">
          <div className="w-40 h-8 ">
            <img
              className="w-full h-full"
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premiere"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs rounded-xl text-white">
            Streaming Now
          </span>
        </div>
        <h1 className="hidden lg:block text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        {/* Now display will be different for mobile and pc screen */}
        <div className="flex flex-col-reverse lg:flex-col gap-3">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {language}</h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)}h &bull; {genre} • UA &bull; 18
              May, 2023
            </h4>
          </div>
          <div className="flex items-center gap-3 md:w-screen md:px-4 lg:w-full">
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg" onClick={rentMovies}>
              Rent ₹199
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg" onClick={buyMovies}>
              Buy ₹599
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
