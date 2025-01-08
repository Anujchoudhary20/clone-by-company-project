import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const SignIn = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const hendelOnchange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      toast.error("Please fill all the fields!");
      // alert("Please fill all the fields! ");
    } else {
      const existingData =
        JSON.parse(localStorage.getItem("userInformation")) || [];
      const updatedData = [...existingData, userData];

      localStorage.setItem("userInformation", JSON.stringify(updatedData));
      setUserData({ name: "", email: "", password: "" });
      toast.success("Registration successfully!");
      // alert("Data saved successfully!");
      Navigate("/login");
    }
  };
  return (
    <form className=" bg-white   flex items-center h-screen justify-center">
      <div className="bg-gray-300 rounded-md  py-5  px-10   ">
  
          <div className="flex  flex-col w-96  max-sm:w-56 max-sm:text-xl justify-center">
          <strong className="my-4 flex justify-center font-bold text-2xl" >Register </strong>

            <label className='text-2xl font-bold max-sm:text-xl text-gray-600'> Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={userData.name}
              onChange={hendelOnchange}
              className='w-full h-10 text-black max-sm:text-xl my-3 rounded-md text-xl px-2'
              
            />
            <label className='text-2xl font-bold max-sm:text-xl text-gray-600'> Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={hendelOnchange}
              className='w-full h-10 text-black max-sm:text-xl my-3 rounded-md text-xl px-2'
              
            />
            <label className='text-2xl font-bold max-sm:text-xl text-gray-600'> Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={hendelOnchange}
              className='w-full h-10 text-black max-sm:text-xl my-3 rounded-md text-xl px-2'
              
            />
            {/* <input type="password" placeholder='canform password' /> */}
            <button
               className='bg-blue-400 w-full my-3 h-12 rounded-3xl text-2xl font-bold hover:bg-blue-600 item'
              onClick={handelSubmit}
            >
              Sign Up
            </button>

            <p className="max-sm:text-base text-gray-600 text-2xl w-full  ">
              Already have an account?<Link to="/login"> Login </Link>{" "}
            </p>
          </div>
        
      </div>
    </form>
  );
};

export default SignIn;