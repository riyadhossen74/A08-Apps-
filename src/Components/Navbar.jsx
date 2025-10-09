import React, { useState } from "react";
import { Link } from "react-router";
import Navlink from "./Navlink";
import { GiThunderBlade } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "App",
    path: "/app",
  },
  {
    id: 3,
    name: "Install",
    path: "/install",
  },
];

const Navbar = () => {
  const link = navData.map((data) => (
    <Navlink data={data} key={data.id}></Navlink>
  ));
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex justify-between px-5 md:px-30 items-center shadow py-2">
        <div className="flex items-center text-[#9F62F2] text-2xl font-semibold  gap-1.5 hover:underline ">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <TbXboxX className="text-black md:hidden" />
            ) : (
              <CiMenuBurger className="text-black md:hidden" />
            )}
          </span>
          <ul
            className={`'md:hidden absolute duration-1000 bg-amber-400 p-5 text-black ${
              open ? "top-10" : "-top-200"
            }`}
          >
            {link}
          </ul>
          <Link to="/">
            <img className="md:w-[50px] w-8 ml-1.5" src="/logo.png" alt="" />
          </Link>
          <h1>Hero.io</h1>
        </div>
        <div>
          <ul className="md:flex gap-6 font-semibold hidden">{link}</ul>
        </div>
        <div>
          <button className="bg-[#9055ee] p-2 rounded-md flex items-center gap-1.5 text-white">
            <FaGithub></FaGithub>
            <a href="https://github.com/riyadhossen74">Contribute</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
