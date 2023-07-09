import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import MainCarousel from "../Carousel/MainCarousel";
import Poster from "../Poster/Poster";
import Filter from "../PlaysFilter/Filter";
import axios from "axios";
import { defaultImageUrl } from "../../utils/constants";

const Plays = () => {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  async function getTopRatedMovies() {
    const getTop = await axios.get("/movie/now_playing");
    // console.log(getTop?.data?.results[0]?.original_title);
    setTopRated(getTop?.data?.results);
  }
  // console.log(topRated);
  return (
    <>
      <div className="bg-">
        <Header />
        <div className="flex flex-col gap-10">
          <MainCarousel />
        </div>

        <div className="container mx-auto px-4">
          <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold mb-4">Plays in Dehradun</h2>
              <div className="flex flex-wrap">
                {topRated.map((topMovie) => {
                  console.log(topMovie);
                  return (
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3" key={topMovie.id}>
                      <Poster
                        {...topMovie}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-3/12">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div>
                <Filter
                  title="Date"
                  tags={["Today", "Tomorrow", "This Weekend"]}
                />
                <Filter
                  title="Language"
                  tags={["Hindi", "Urdu", "English", "Punjabi"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
