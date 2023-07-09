import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PosterSlider from "../Carousel/PosterSlider";
import Cast from "../Cast-Crew Component/Cast";
import Crew from "../Cast-Crew Component/Crew";
import MovieHeroComponent from "../MovieHero/MovieHeroComponent";
import MovieNavbar from "../Navbar/MovieNavbar";
import { FaCcVisa } from "react-icons/fa";

// Context
import MovieContext from "../Context/MovieContext";

// Slider Setting
import { castCrewSetting } from "../../utils/config";
import Slider from "react-slick";

import axios from "axios";
import { defaultImageUrl } from "../../utils/constants";

const Movie = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);

  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const { movie, setMovie } = useContext(MovieContext);
  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
    getRecommendedMovies();
  }, [id]);

  useEffect(() => {
    getCastDetails();
  }, [id]);

  async function getMovieDetails() {
    const getDetails = await axios.get(`/movie/${id}`);
    setMovie(getDetails?.data);
  }

  async function getCastDetails() {
    const getCast = await axios.get(`/movie/${id}/credits`);
    setCasts(getCast.data?.cast);
    setCrews(getCast.data?.crew);
  }

  async function getSimilarMovies() {
    const getSimilar = await axios.get(`/movie/${id}/similar`);
    setSimilarMovies(getSimilar?.data?.results);
  }
  async function getRecommendedMovies() {
    const getRecommended = await axios.get(`/movie/${id}/recommendations`);
    setRecommended(getRecommended?.data?.results);
  }
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <MovieNavbar />
      <MovieHeroComponent />
      <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>

          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-200 border-dashed">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-gray-700">Visa Stream Offer</h2>
                <p className="text-gray-600">
                  Get 50% off upto INR 500 on all Visa cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-200 border-dashed">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-gray-700">Filmy Pass</h2>
                <p className="text-gray-600">
                  Get Rs75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Cast</h2>
          <Slider {...castCrewSetting}>
            {casts.map((cast) => {
              return (
                <Cast
                  image={defaultImageUrl + cast?.profile_path}
                  name={cast?.name}
                  role={cast?.character}
                  key={cast?.id}
                />
              );
            })}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Crew</h2>
          <Slider {...castCrewSetting}>
            {crews.map((crew) => {
              return (
                <Crew
                  image={defaultImageUrl + crew?.profile_path}
                  name={crew?.original_name}
                  role={crew?.job}
                  key={crew?.id}
                />
              );
            })}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title={"You might also like"}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommended}
            title={"BMS Xclusive"}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
