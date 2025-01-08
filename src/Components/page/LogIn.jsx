import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Login = () => {
  const [signUpInfo, setSignUpInfo] = useState([]);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user information from localStorage
    const storedInfo = JSON.parse(localStorage.getItem('userInformation')) || [];
    setSignUpInfo(storedInfo);
    
  }, []);
  // console.log("login data ",signUpInfo.find(signUpInfo.email))

  // Handle input changes
  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists in stored sign-up data
    const userExists = signUpInfo.find(
      (user) => user.email === userData.email && user.password === userData.password
    );  
  

    if (userExists) {
      toast.success("Login successful!")
      localStorage.setItem("userLogInformation", JSON.stringify(userData));
    
      navigate('/');
    } else {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  return (
    <form className="bg-white w-full h-screen flex justify-center items-center" onSubmit={handleSubmit}>
      <div className='bg-gray-300 rounded-md  py-5  px-10'>
        <strong className='my-4 flex justify-center font-bold text-2xl'>Log In</strong>
       
          <div className="flex  flex-col max-sm:w-56 w-96 justify-center">
            {/* email Input */}
            <label className='text-2xl max-sm:text-xl font-bold text-gray-600'>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              name="email"
              onChange={handleOnChange}
              className='w-full h-10 text-black my-3 max-sm:text-xl rounded-md text-2xl px-2'
              required
            />
            {/* password  input*/}
            <label className='text-2xl font-bold max-sm:text-xl text-gray-600'>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              name="password"
                 className='w-full h-10 text-black my-3 rounded-md text-2xl max-sm:text-xl px-2'
              onChange={handleOnChange}
              required
            />
            {/* forgot Password */}
            <label className='text-2xl font-bold max-sm:text-xl text-gray-600'>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </label>
            <button
              type="submit"
              className='bg-blue-400 w-full my-3 h-12 rounded-3xl text-2xl font-bold hover:bg-blue-600 item'
            >
              Log In
            </button>
            <p className='text-2xl font-bold max-sm:text-xl text-gray-600'>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      
    </form>
  );
};

export default Login;