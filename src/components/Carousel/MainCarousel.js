import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Axios
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultImageUrl } from "../../utils/constants";

const MainCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // async call
    getImages();
  }, []);

  async function getImages() {
    const imagesData = await axios.get("/movie/now_playing");
    setImages(imagesData.data.results);
  }
  const settingLg = {
    arrows: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={defaultImageUrl + image.backdrop_path}
                  alt="testing"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider {...settingLg}>
          {images.map((image, index) => {
            return (
              <div className="w-full h-96 px-2 py-3 rounded-md">
                <img
                  src={defaultImageUrl + image.backdrop_path}
                  alt="testing"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default MainCarousel;
