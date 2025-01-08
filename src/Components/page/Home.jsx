import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import video from "../../assets/cricket.mp4";
import image from "../../assets/images.jpeg";
import TogalButton from "./TogalButton";
import SlicksSide from "./SlicksSide";
const Home = () => {
  const Navigate = useNavigate();
  const HandelSignin = () => {
    Navigate("/signup");
  };
  
  const divData = [
    {
      icon: <FaPlusCircle />,
      text: "Chance at the Million Dollar Catch",
    },
    {
      icon: <FaPlusCircle />,
      text: "Kookaburra Beast Bat RRP$1450",
    },
    {
      icon: <FaPlusCircle />,
      text: "Bausele Watch RRP$2100",
    },
    {
      icon: <FaPlusCircle />,
      text: "Weekly spot prizes and giveaways",
    },
  ];
  const cardInfo = [
    {
      image: image,
      hading: "anuj choudhary",
      price: "$124",
      other: "hi  i am anuj",
    },
    {
      image: image,
      hading: "anuj choudhary",
      price: "$124",
      other: "hi  i am anuj",
    },

    {
      image: image,
      hading: "anuj choudhary",
      price: "$124",
      other: "hi  i am anuj",
    },
  ];

  return (
    <div className="items-center  text-white    p-5 w-full  ">
      <div className="  flex  max-lg:flex-col  justify-between px-20 max-sm:p-2    w-full h-screen items-center   ">
        {/* text */}
        <div className="     max-lg:my-10   text-white">
          <h1 className="flex items-center font-bold my-5">
            {" "}
            CRICKET FUN CLUB{" "}
            <img
              src="https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?ga=GA1.1.155289919.1729487978&semt=ais_hybrid"
              alt=""
              className="w-5 ml-3 rounded-lg"
            />
          </h1>
          <strong className="text-3xl">Anuj choudhary </strong>
          <p className="font-bold max-sm:flex      max-sm:justify-center my-5 text-2xl">
            the offical funclub. Get podcasts, price,-fun day.
          </p>
          <button
            onClick={HandelSignin}
            className="bg-blue-600 rounded-3xl px-4 py-2"
          >
            {" "}
            sign up to Win
          </button>
        </div>
        {/* video */}
        <div className=" max-sm:w-full h-96 max-2xl:w-96  p-5    max-lg:my-5   ">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="w-96 h-full  object-cover rounded-md"
          />
        </div>
      </div>
      {/*  section 2*/}
      <div className="w-full h-full   max-lg:flex-wrap py-10">
        <p className="flex justify-center items-center text-center  max-sm:text-sm text-white">
          JOIN AND ENTER THE DRAW TO WIN{" "}
          <FaRegHeart className="text-red-800 mx-5" />
        </p>
        <div className="flex flex-wrap   my-5 justify-around">
          {divData.map((item) => (
            <div className=" mx-5" key={item.text}>
              <div className="flex flex-wrap  justify-center py-5 text-white">
                {item.icon}
              </div>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
        {/* section 3 */}
        <div className="text-white flex    flex-wrap justify-between px-5  mx-5 mt-20  items-center">
          {/* video */}
          <div className="max-lg:w-full w-96 h-96 mb-5  ">
            <video
              src={video}
              autoPlay
              muted
              loop
              className="w-screen h-full  max-sm:h-full object-cover  rounded-md"
            />
          </div>
          {/* text */}
          <div className="w-1/2 max-sm:text-sm   max-sm:w-full ">
            <strong className=""> Feed </strong>
            <p className="my-5 font-bold text-2xl">
              Everything in one place. Podcasts, prizes, points and shopping and
              lots more.
            </p>
            <button className="border-2 border-blue-600 px-4 py-2 rounded-3xl  ">
              become a member
            </button>
          </div>
        </div>
        </div>

        {/* section 4 */}

        <TogalButton/>
              {/* section 4 */}
        <div className=" flex h-full  mt-10  w-full justify-center">
          <div className="w-full  px-3">
            <strong className="flex justify-center">Shop</strong>
            <p className="text-2xl flex justify-center  w-full  ">
              Exclusive deals on Glenn's playing kit, products and{" "}
            </p>
            <p className="text-2xl flex justify-center">
              his personal favourites.
            </p>
           <SlicksSide/>
          </div>
        </div>
      
    </div>
  );
};

export default Home;
