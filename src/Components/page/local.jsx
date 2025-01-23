import React, { useState } from 'react'

const local = () => {
    const [userNumber ,setUserNumber]=useState('')
    const [user,setUser]=useState('')

const HandleSubmit = ()=>{
    if (userNumber>="10"){
        console.log("hi i am ",userNumber)
     setUser(userNumber)
    }

}
    console.log("anuj",user)
  return (
    <div style={{color:"blue"}}>
       <input type="tel" placeholder='number'
       value={userNumber}
       onChange={(e)=>{
        let data =(e.target.value)
        if (/^\d{0,10}$/.test(data)) 
            setUserNumber(data);
       }} />
       <button onClick={HandleSubmit}>submitData</button>
       <div>{user}</div>
    </div>
  )
}

export default local
