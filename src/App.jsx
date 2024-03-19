import React, { useContext, useState } from "react";
import { MyContext } from "./Components/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";

function App() {
  const { data, menu } = useContext(MyContext);

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {/* Nav Bar */}
      <NavBar />
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
