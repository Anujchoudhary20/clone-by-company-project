import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";


const SignUp = () => {
  const Navigate =useNavigate()
    const[name,setName] =useState('')
    const[lastName,setLastName] =useState('')
    const[email,setEmail] =useState('')
    const[mob,setMob] =useState('')
    const[password,setPassword] =useState('')
    const[confirmPassword,setConfirmPassword] =useState('')
    const SignUpData =JSON.parse(localStorage.getItem("signUpInfo")) ||[]
    const data = {
        "Name": name,
        "lastName": lastName,
        "email": email,
        "mobileNumber":mob,
        "password": password,
      }

  
    
      let updatedData = [...SignUpData, data];
      
  console.log('anuj',updatedData)

      const HandleSubmit =(e)=>{
        e.preventDefault()
        if(name && password && email &&mob && lastName && confirmPassword){
          

          if(password===confirmPassword){
            const emailTest= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(emailTest.test(email)){
             
              const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if(passwordTest.test(password)){
                toast.success("You are Sign Up Successfuliy")
                // alert("you are login successfuliy")
              localStorage.setItem("signUpInfo", JSON.stringify(updatedData))
              Navigate("/LogIn")
              }
              else{
                toast.error("Wrong Password")
                // alert("Wrong Password")
              }


            }else{
              toast.error("Email Id Incorrect")
              // alert("Email Id Incorrect")
            }
          }
          else{
            toast.error("Password and confirm password does not match")
            // alert("Password and confirm password does not match")
          }
        }
        else{
          toast.error("all fild is madetary")
          // alert("all fild is madetary")
        }
        
      }

    return (
    <div className=' flex justify-center w-screen max-sm:px-5   items-center text-black'>
      
        <form  
        
        className=' bg-white px-10 rounded-md h-auto flex py-10 flex-col w-96'>
          <h1 className='flex justify-center text-3xl font-bold'>Register</h1>
            {/* Name */}

            <label className='text-xl'>Name</label>
      <input type="text" placeholder='Name'value={name} onChange={(e)=>setName(e.target.value)}
      className='rounded-sm text-black px-1 border-gray-500 border-2'
      />
      <p className='text-red-600 h-8'>{name ? "": "Name is Required"}</p>
      {/* last name */}
      <label className='text-xl'>Last Name</label>
      <input type="text" placeholder='Last Name'value={lastName} onChange={(e)=>setLastName(e.target.value)}
      className='rounded-sm text-black px-1 border-gray-500 border-2'
      />
      <p className='text-red-600 h-8'>{lastName? "": "Name is Required"}</p>

      {/* Email */}
      <label htmlFor="">Email</label>
      <input type="email" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} 
      className='rounded-sm text-black px-1 border-gray-500 border-2' />
      <p className='text-red-600 h-8'>{email ? "": "Email is Required"}</p>
        {/* Contect Mob */}
        <label htmlFor="">Mobile No.</label>
      <input type="tel" placeholder=' Mobile Number'value={mob} 
      onChange={(e)=>{
        let data =(e.target.value)
        if (/^\d{0,10}$/.test(data))
          {setMob(e.target.value)} 
        
      }}
      className='rounded-sm text-black px-1 border-gray-500 border-2'/>
      <p className='text-red-600 h-8'>{mob ? "": "Mobile No. is Required"}</p>
        {/* Password */}
        <label htmlFor="">Password</label>
      <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)} 
      className='rounded-sm text-black px-1 border-gray-500 border-2' />
      <p className='text-red-600 h-8'>{password ? (password.length<8 ?"password shuld be 8 cher": ""): "Password is Required"}</p>
        {/* confirm password */}
        <label htmlFor="">Confirm Password</label>
      <input type="password" placeholder='Confirm Password'value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} 
      className='rounded-sm text-black px-1 border-gray-500 border-2'/>
      <p className='text-red-600 h-8'>{confirmPassword ? "": "confirm Password is Required"}</p>
        <div>
            <button 
            onClick={HandleSubmit}
            className='bg-blue-600 rounded-md w-full py-1 text-yellow-400 font-bold'>Sign Up</button>
        </div>
        <p className="py-2">
              Already have an account?<Link to="/login"> Login </Link>{" "}
            </p>

      </form>
    </div>
  )
}

export default SignUp
