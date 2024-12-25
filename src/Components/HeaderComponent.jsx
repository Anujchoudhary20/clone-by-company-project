import React from 'react'
import {Link} from "react-router-dom"

const HeaderComponent = () => {
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
    <div>
      {user > 0 ? (
        <div>
          <h1 className="text-red-700 font-bold">Anuj Choudhary</h1>
          <nav>
            <ul className="text-center gap-4 my-2 flex text-slate-300">
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
        <div className='flex justify-end text-white mx-7 p-5  '>

          <Link to='/login' className='border-2 px-3 py-2 m-2 rounded-3xl' >Log In</Link>
        </div>
      )}
    </div>
  )
}

export default HeaderComponent
