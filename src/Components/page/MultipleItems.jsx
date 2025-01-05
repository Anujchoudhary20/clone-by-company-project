import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="flex justify-center  ">
    <div className="slider-container bg-green-400 ">
      <Slider {...settings} className="h-96 w-96">
        <div className="h-96 w-96 bg-slate-200">
          <h3 className="bg-red-400">1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default MultipleItems;
