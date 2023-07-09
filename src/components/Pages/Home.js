import { useState, useEffect } from "react";

//  Carousel and Slider
import MainCarousel from "../Carousel/MainCarousel";
import EntertainmentCarousel from "../Carousel/EntertainmentCarousel";
import PosterSlider from "../Carousel/PosterSlider";

// Header
import Header from "../Navbar/Header";

// Axios
import axios from "axios";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  //  API call
  useEffect(() => {
    getPopularMovies();
    
  }, []);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getPopularMovies() {
    const popMovieData = await axios.get("/movie/popular");
    setPopularMovies(popMovieData.data.results);
  }
  async function getTopRatedMovies() {
    const topRatedMoviesData = await axios.get("/movie/top_rated");
    setTopRatedMovies(topRatedMoviesData.data.results);
  }
  async function getUpcomingMovies() {
    const upcomingMoviesData = await axios.get("/movie/upcoming");
    setUpcomingMovies(upcomingMoviesData.data.results);
  }

  return (
    <>
      <Header />

      <div className="flex flex-col gap-10">
        <MainCarousel />
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 my-3">
            The Best of Live Events
          </h2>
          <EntertainmentCarousel />
        </div>

        <div className="bg-bms-800 py-6 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                className="w-full h-full"
              />
            </div>

            <PosterSlider
              images={popularMovies}
              title={"Primeres"}
              subtitle={"Brand new releases every Friday"}
              isDark
              
            />
          </div>
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={topRatedMovies}
            title={"Online Streaming events"}
            isDark={false}
          />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={upcomingMovies}
            title={"Popular Events"}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
