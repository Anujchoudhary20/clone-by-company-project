
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {  Routes, Route } from "react-router-dom";
import Home from "./Components/page/Home";
import Profile from "./Components/page/Profile";
import Contect from "./Components/page/Contect";
import Terms from "./Components/page/Terms";
import Privacy from "./Components/page/Privacy";
import Shipping from "./Components/page/Shipping";
// import Dashboard from "./Components/page/Dashboard";

function App() {
  const RouteData = [
    { element:  <Home/>,  path: "/" },
    // { element: <Dashboard/>,  path: "/dashboard" },
    { element: <Profile/>, path: "/profile" },
    { element: <Contect/>, path: "/contect" },
    { element: <Terms/>, path: "/terms" },
    { element: <Privacy/>, path: "//privacy" },
    { element: <Shipping/>, path: "/shipping" },
  ];

  return (
    <div className="bg-black  text-white  w-full " >
      <HeaderComponent />
      <Routes>
        {RouteData.map((item) => (
          <Route 
          key={item.element} 
           path={item.path} element={item.element} />
        ))
        } 
      </Routes>
      

      <FooterComponent />
    </div>
  );
}

export default App;
