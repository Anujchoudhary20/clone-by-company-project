
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {  Routes, Route,useLocation } from "react-router-dom";
import Home from "./Components/page/Home";
import Profile from "./Components/page/Profile";
import Contect from "./Components/page/Contect";
import Terms from "./Components/page/Terms";
import Privacy from "./Components/page/Privacy";
import Shipping from "./Components/page/Shipping";
import Login from "./Components/page/LogIn";
import SignIn from "./Components/page/SignUp";
// import Dashboard from "./Components/page/Dashboard";

function App() {
  const location =useLocation()
  const ShowHeader = !["/login"].includes(location.pathname);
  const ShowFooter = !["/login"].includes(location.pathname);
  const RouteData = [
    { element:  <Home/>,  path: "/" },
    { element:  <Login/>,  path: "/login" },
    { element:  <Login/>,  path: "/loin" },
    { element:  <SignIn/>,  path: "/signup" },
    // { element: <Dashboard/>,  path: "/dashboard" },
    { element: <Profile/>, path: "/profile" },
    { element: <Contect/>, path: "/contect" },
    { element: <Terms/>, path: "/terms" },
    { element: <Privacy/>, path: "//privacy" },
    { element: <Shipping/>, path: "/shipping" },
  ];

  return (
    <div className="bg-black  text-white  w-full " >
      {ShowHeader &&<HeaderComponent />}
      <Routes>
        {RouteData.map((item) => (
          <Route 
          key={item.element} 
           path={item.path} element={item.element} />
        ))
        } 
      </Routes>
      

      {ShowFooter && <FooterComponent />}
    </div>
  );
}

export default App;
