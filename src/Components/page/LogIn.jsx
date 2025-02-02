import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";


const LogIn = () => {
  const Navigate =useNavigate()
  
    const[emailMobile,setEmailMobile] =useState('')
    const[password,setPassword] =useState('')
    const [signUpInfo ,setSignUpInfo]= useState([])
    useEffect(()=>{
    const Info =JSON.parse(localStorage.getItem("signUpInfo")) || []
     setSignUpInfo(Info)
    },[])
    console.log("anuj info",signUpInfo)

    const  LoginData= {
      email : emailMobile,
      mobileNumber: emailMobile,
      password : password,
    }
  
    
    
      
  

      const HandleSubmit =(e)=>{
        e.preventDefault()
       const  LoginInfoEmail = signUpInfo.find(
          (user)=>user.email ===emailMobile && user.password ===password
        )

        console.log("LoginInfoEmail",LoginInfoEmail)
        const  LoginInfoMob = signUpInfo.find(
          (user)=>user.mobileNumber === emailMobile && user.password ===password
        )
        console.log("LoginInfoMobile",LoginInfoMob)
        if(LoginInfoEmail){
          Navigate("/")
          toast.success("Login successful using Email!")
          // alert("Login successful using Email!");
          localStorage.setItem("LoginInfo",JSON.stringify(LoginData) )
        
        }else if (LoginInfoMob){
          Navigate("/")
          toast.success("Login successful using Mobile Number!")
          // alert("Login successful using Mobile Number!");
        }
        else{
          toast.error("Invalid email/phone or password!")
          // alert("Invalid email/phone or password!");

        }
      
      }

    return (
    <div className=' flex justify-center h-screen items-center w-full max-sm:px-5 overflow-hidden   text-black'>
      
        <form 
        
        className=' bg-white px-10 rounded-md py-5  h-80    flex flex-col w-96'>
          <h1 className='flex justify-center text-3xl font-bold'>Log In</h1>
        
      {/* Email */}
      <label htmlFor="">Email or Phone Nomber</label>
      <input type="text" placeholder='Email or Phone Number'value={emailMobile} onChange={(e)=>setEmailMobile(e.target.value)} 
      className='rounded-sm text-black px-1 border-gray-500 border-2' />
      <p className='text-red-600 h-8'>{emailMobile ? "": "Email is Required"}</p>
        {/* Contect Mob */}
        {/* <label htmlFor="">Phone Nomber</label>
      <input type="tel" placeholder=''value={mob} 
      onChange={(e)=>{
        let data =(e.target.value)
        if (/^\d{0,10}$/.test(data))
          {setMob(e.target.value)} 
      }}
      className='rounded-sm text-black px-1 border-gray-500 border-2'/> 
      <p className='text-red-600 h-8'>{mob ? "": "Mobile No. is Required"}</p>*/}
        {/* Password */}
        <label htmlFor="">Password</label>
      <input type="password" placeholder=' Password'value={password} onChange={(e)=>setPassword(e.target.value)} 
      className='rounded-sm text-black px-1 border-gray-500 border-2' />
      <p className='text-red-600 h-8'>{password ? "": "Password is Required"}</p>
        <div>
            <button 
            onClick={HandleSubmit}
            className='bg-blue-600 rounded-md w-full py-1 text-yellow-400 font-bold'>Log In</button>
        </div>
        <p className="py-2">
        Don't have an account? <Link to="/signup">{" "}  SignUp</Link>
            </p>

      </form>
    </div>
  )
}

export default LogIn
