import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MyContext } from "./Context";

function Menu() {
  const { menu, setMenu } = useContext(MyContext);
  return (
    <div
      className={`absolute bg-[#1c1c5f] h-dvh w-[80%] top-0 ${menu} flex flex-col px-8 justify-center gap-3 transition-all duration-1000 ease-out`}
    >
      <button
        onClick={() => {
          setMenu("right-[-100%]");
        }}
        className="absolute right-6 top-6 text-xl text-zinc-200"
      >
        <MdOutlineCancel />
      </button>
      <Link onClick={() => setMenu('right-[-100%]')} className="py-1 rounded" to="/">
        Home
      </Link>
      <Link
        onClick={() => setMenu('right-[-100%]')}
        className="py-1 rounded"
        to="/about"
      >
        About
      </Link>
      <Link
        onClick={() => setMenu('right-[-100%]')}
        className="py-1 rounded"
        to="/contact"
      >
        Contact
      </Link>
      <Link
        onClick={() => setMenu('right-[-100%]')}
        className="py-1 rounded"
        to="/blog"
      >
        Blog
      </Link>
      <div className="h-[1px] w-full bg-zinc-300"></div>
      <div className=" flex gap-2 text-sm">
        <a
          className="bg-[#191948] border w-20 p-1 rounded flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setMenu("-100%")}
        >
          Resume
        </a>
        <a
          href="https://github.com/ayush-singh09"
          onClick={() => setMenu("-100%")}
          target="_blank"
          className="bg-black border w-[95px] p-1 rounded flex items-center justify-center gap-2"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Menu;
