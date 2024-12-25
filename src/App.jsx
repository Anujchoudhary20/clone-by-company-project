import { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {  Routes, Route } from "react-router-dom";

import Home from "./Components/page/Home";
import Profile from "./Components/page/Profile";
import Contect from "./Components/page/Contect";
import Terms from "./Components/page/Terms";
import Privacy from "./Components/page/Privacy";
// import Profile from "./Components/page/Profile";
import Shipping from "./Components/page/Shipping";
import Dashboard from "./Components/page/Dashboard";

function App() {
  const RouteData = [
    { element: <Home/>, path: "/" },
    { element: <Dashboard/>, path: "/dashboard" },
    { element: <Profile/>, path: "/dashboard/profile" },
    { element: <Contect/>, path: "/dashboard/contect" },
    { element: <Terms/>, path: "/dashboard/terms" },
    { element: <Privacy/>, path: "/dashboard/privacy" },
    { element: <Shipping/>, path: "/dashboard/shipping" },
  ];

  return (
    <div className="bg-black">
      <HeaderComponent />
      <Routes>
        {RouteData.map((item) => (
          <Route key={item.element} path={item.path} element={item.element} />
        ))
        }
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
