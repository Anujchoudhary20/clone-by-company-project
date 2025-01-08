import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";

const FooterComponent = () => {
  const footerItem = [
    // { Name: "Profile", Navigat: "/profile" },
    { Name: "Contect", Navigat: "/contect" },
     { Name: "Terms", Navigat: "/terms" },
    { Name: "Privacy", Navigat: "/privacy" },
    // { Name: "Shipping", Navigat: "/shipping" },
  ];
  return (
    <footer className="py-5  w-screen">
      <h1 className="text-red-700 mx-5 font-bold">Anuj Choudhary</h1>
      <div className="flex justify-between  w-screen ">
        <div className="flex  gap-4 my-2 text-slate-300 px-4">
          <ul className="text-center flex gap-4 max-sm:flex-col ">
            {footerItem.map((item) => (
              <li key={item.Name}>
                <Link to={item.Navigat}>{item.Name}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        {/*social media link  */}
        <div className="text-red-600 px-10 flex gap-2  text-center text-2xl">
          <a href="https://www.instagram.com/" target="__black" className="">
            <FaSquareInstagram className="text-red-600" />
          </a>
          <a href="https://www.facebook.com/" target="__black">
            <FaFacebook className="text-blue-600" />
          </a>
          <a href="https://www.tuter.com/" target="__black">
            {" "}
            <FaXTwitter className="text-white" />
          </a>
        </div>
      </div>
      <strong className="text-white flex items-center mx-5">
        Anuj choudhary <MdOutlineCopyright /> 2024{" "}
      </strong>
    </footer>
  );
};

export default FooterComponent;
