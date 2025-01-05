import React from 'react'
import {Link,useNavigate} from "react-router-dom"

const HeaderComponent = () => {
  const Navigate = useNavigate()

  const HandelLogIn =()=>{
    Navigate("/login")
  }
    const navItem=[
        {Name :"Home",
         Navigat : "/"
        },
        {Name :"Feed",
            Navigat : "/feed"
           },

           {Name :"Shop",
            Navigat : "/shop"
           },

    ]
   const user =0;
  return (
    <div className=''>
      {user > 0 ? (
        <div className=' bg-blue-700 '>
          <h1 className="text-red-700 font-bold">Anuj Choudhary</h1>
          <nav>
            <ul className="text-center w-full gap-4 my-2 flex text-slate-300">
              {navItem.map((item) => (
                <li key={item.Name} className="flex">
                  <Link to={item.Navigat}>{item.Name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="" />
        </div>
      ) : (
        <div className='flex  justify-end text-white mx-7 p-5  '>

          <button className='border-2  rounded-3xl px-4 py-2' onClick={HandelLogIn}>LogIn</button>
        </div>
      )}
    </div>
  )
}

export default HeaderComponent
