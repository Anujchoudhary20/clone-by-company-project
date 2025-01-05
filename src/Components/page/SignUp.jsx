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
    <form className="Register-head">
      <div>
        <h1 style={{ padding: "10px" }}>Register </h1>
        <div className="Register-div1">
          <img src={Image} className="Register-img" />

          {/* </div>  */}

          <div className="input">
            <label> Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={userData.name}
              onChange={hendelOnchange}
            />
            <label> Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={hendelOnchange}
            />
            <label> Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={hendelOnchange}
            />
            {/* <input type="password" placeholder='canform password' /> */}
            <button
              style={{ marginTop: "20px", fontSize: "18px" }}
              onClick={handelSubmit}
            >
              Sign Up
            </button>

            <p>
              Already have an account? <Link to="/login"> Log in </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;