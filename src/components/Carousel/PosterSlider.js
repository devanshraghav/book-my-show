import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster";

// config
import { posterCarouselSetting } from "../../utils/config";

const PosterSlider = (props) => {
  const sliderConfig = props.config ? props.config : posterCarouselSetting;
  return (
    <>
      <div className="text-white flex flex-col items-start">
        <h1
          className={`font-bold text-3xl ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.title}
        </h1>
        <p className="text-sm">{props.subtitle}</p>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => {
          return <Poster {...image} key={image.title} isDark={props.isDark} />;
        })}
      </Slider>
    </>
  );
};

export default PosterSlider;
