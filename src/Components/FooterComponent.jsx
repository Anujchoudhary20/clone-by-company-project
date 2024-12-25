import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";

const FooterComponent = () => {
  const footerItem = [
    { Name: "Profile", Navigat: "dashboard/profile" },
    { Name: "Contect", Navigat: "dashboard/contect" },
     { Name: "Terms", Navigat: "dashboard/terms" },
    { Name: "Privacy", Navigat: "dashboard/privacy" },
    { Name: "Shipping", Navigat: "dashboard/shipping" },
  ];
  return (
    <footer className="py-5">
      <h1 className="text-red-700 font-bold">Anuj Choudhary</h1>
      <div className="flex justify-between">
        <nav className="flex gap-4 my-2 text-slate-300 px-4">
          <ul className="text-center ">
            {footerItem.map((item) => (
              <li key={item.Name}>
                <Link to={item.Navigat}>{item.Name}</Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
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
      <strong className="text-white flex items-center ">
        Anuj choudhary <MdOutlineCopyright /> 2024{" "}
      </strong>
    </footer>
  );
};

export default FooterComponent;
