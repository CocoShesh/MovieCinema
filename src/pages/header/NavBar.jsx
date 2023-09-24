import React from "react";
import { BiLogIn } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className=" bg-black flex items-center justify-between  py-5 px-12 text-white sticky  w-full   ">
        <section>
          <h1 className="uppercase logo">Cinema</h1>
        </section>

        <section className="max-lg:hidden ">
          <ul className="flex gap-10 items-center uppercase cursor-pointer">
            <a href="/">
              {" "}
              <AiFillHome className=" fill-red-500" />
            </a>
            <li className=" scroll-smooth">
              <a href="#Schedule">Schedule</a>
            </li>
            <li>
              {" "}
              <a href="#coming-soon">Trend </a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <Link to="/AddList"> List </Link>
            </li>
          </ul>
        </section>
        <section className="relative max-lg:hidden ">
          <ImSearch className="absolute top-[7px]  left-3 text-[12px]" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="search bg-transparent border-[1px] border-white pl-9 rounded-sm  "
          />
        </section>

        <section className="max-lg:hidden ">
          <button className="w-[100px] h-[30px] bg-orange-500 flex items-center  justify-center  gap-2 uppercase">
            <BiLogIn />
            Sign In
          </button>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
