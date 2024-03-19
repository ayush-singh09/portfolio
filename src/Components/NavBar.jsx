import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { MyContext } from "./Context";

function NavBar() {
  const {setMenu} = useContext(MyContext);
  const [isPhone, setIsPhone] = useState(() => {
    if (window.innerWidth > 600) return 1;
    return 0;
  });
  return (
    <div className="nav bg-[#15154d] bg-opacity-25 py-3 px-4 flex justify-between items-center">
      <h1 className="font-bold text-3xl">
        ayush.<span className="text-red-600">dev</span>
      </h1>
      {isPhone ? (
        <div className="flex p-1 gap-5 text-lg items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <a
            href="https://github.com/ayush-singh09"
            target="_blank"
            className="bg-zinc-900 p-2 rounded-md border"
          >
            <FaGithub />
          </a>
        </div>
      ) : (
        <div onClick={()=>{
          setMenu('right-[0]');
        }} className="text-xl text-blue-400">
          <RiMenu5Line />
        </div>
      )}
    </div>
  );
}

export default NavBar;
