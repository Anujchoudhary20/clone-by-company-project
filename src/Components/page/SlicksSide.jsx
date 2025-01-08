import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/images.jpeg";

function SlicksSide() {
  
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="flex justify-center   w-full mx-10 ">
      <div className="  w-4/5   max-sm:w-screen items-center">
        <Slider {...settings} className="h-96 items-center   ">
          <div className="  w-full  max-sm:w-screen   h-full">
            <div className=" p-5 h-full mt-5 bg-slate-600 w-60 max-sm:w-32  max-lg:w-44 max-xl:w-44  rounded-lg">
              <img src={image} alt="" className="rounded-md  " />
              <h1 className="font-bold my-2"> anuj choudhary</h1>
              <p className="font-bold my-2">$124</p>
              <p className="font-bold my-2">hi i am anuj</p>
            </div>
            </div>
            <div className="  w-96  justify-center   h-full">
          <div className=" p-5 h-full mt-5 max-sm:w-32  max-lg:w-44 max-xl:w-44  bg-slate-600 w-60 rounded-lg">
            <img src={image} alt="" className="rounded-md  " />
            <h1 className="font-bold my-2"> anuj choudhary</h1>
            <p className="font-bold my-2">$124</p>
            <p className="font-bold my-2">hi i am anuj</p>
          </div>
          </div>
          <div className="  w-96  justify-center   h-full">
          <div className=" p-5 h-full mt-5 max-sm:w-32 max-lg:w-44 max-xl:w-44 bg-slate-600 w-60  rounded-lg">
            <img src={image} alt="" className="rounded-md " />
            <h1 className="font-bold my-2"> anuj choudhary</h1>
            <p className="font-bold my-2">$124</p>
            <p className="font-bold my-2">hi i am anuj</p>
          </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlicksSide;
