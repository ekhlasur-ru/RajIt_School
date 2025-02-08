import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import About from "./pages/About";
import Join from "./pages/Join";
import LoginOutlet from "./pages/Login/LoginOutlet";
import HomeOutlet from "./pages/Home/HomeOutlet";
import Login from "./pages/Login/Login";
import Course from "./pages/Course";
import GMap from "./pages/GMap";
import OurProgramDetails from "./components/Header/OurProgramDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeOutlet />}>
            <Route index element={<Home />} />
            <Route path="/category/:id" element={<OurProgramDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/join" element={<Join />} />
            <Route path="/map" element={<GMap />} />
          </Route>

          <Route path="/login" element={<LoginOutlet />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
