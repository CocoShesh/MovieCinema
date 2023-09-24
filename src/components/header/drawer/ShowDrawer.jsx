import React, { useState } from "react";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
const ShowDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IoMenu className="text-3xl lg:hidden" onClick={showDrawer} />
      <Drawer placement="left" onClose={onClose} open={open}>
        <section>
          <ul className="flex flex-col gap-10 items-center uppercase cursor-pointer h-[480px] text-white">
            <a href="/">
              {" "}
              <AiFillHome className=" fill-red-500 text-3xl " />
            </a>
            <li className=" scroll-smooth ">
              <a href="#Schedule">Schedule</a>
            </li>
            <li>
              {" "}
              <a href="#coming-soon">Trend </a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </section>

        <section className="flex items-center justify-center mb-auto text-white font-bold ">
          <button className="w-[150px] h-[50px] rounded-md bg-orange-500 flex items-center  justify-center  gap-2 uppercase">
            <BiLogIn />
            Sign In
          </button>
        </section>
      </Drawer>
    </>
  );
};

export default ShowDrawer;
