import React, { useContext, useEffect, useState } from "react";
import AddListContext from "../../AddListContext";
import NavBar from "../header/NavBar";
import { BiMoviePlay } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { Button, Empty, Popconfirm } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
const Additems = () => {
  const { items, setItems } = useContext(AddListContext);

  useEffect(() => {
    AOS.init();
  }, []);
  const handleDeleteItems = itemToDelete => {
    const filteredItem = items.filter(item => item !== itemToDelete);
    setItems(filteredItem);
  };

  return (
    <div className="bg-black h-screen  text-white">
      <NavBar />
      <section className="pl-10 py-10">
        <h1 className="uppercase mb-5 text-xl">WatchList</h1>
        <hr className="w-[600px] h-[3px] border-none bg-gradient-to-r from-red-500 to-black custom-animation" />
      </section>
      <section className="grid grid-cols-5 pl-10 gap-5">
        {items.length === 0 ? (
          <section className="flex flex-col items-center justify-center w-screen mx-auto my-20">
            <img
              src="/public/taxi-list-is-empty.png"
              className="h-[200px]"
              alt=""
            />
            <p className="text-[20px]">
              Oops, it looks like your watchlist is empty.
            </p>
          </section>
        ) : (
          items.map(list => {
            return (
              <div
                data-aos="zoom-in"
                key={list.id}
                className="shadowerist"
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".overlay").style.transform =
                    "scale(1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".overlay").style.transform =
                    "scale(0)";
                }}
              >
                <div
                  className="absolute flex flex-col items-center justify-center w-full h-[375px] bg-black opacity-0 transition-transform duration-300 ease-in-out z-10 top-0 left-0 overlay max-md:text-center  max-lg:text-center"
                  style={{
                    opacity: 0.7,
                    transform: "scale(0)",
                    transformOrigin: "center",
                  }}
                >
                  <div className="flex text-[30px]">
                    <Popconfirm
                      title="Are you sure to delete this task?"
                      onConfirm={() => handleDeleteItems(list)}
                      okText="Yes"
                      cancelText="No"
                      okType="yes"
                    >
                      <a href="#modal">
                        <RiDeleteBinLine className="cursor-pointer" danger />
                      </a>
                    </Popconfirm>
                  </div>
                </div>
                <img
                  src={list.previewImg}
                  alt={list.title}
                  className=" cursor-pointer"
                />
                <div className="flex items-center gap-3 text-[20px] py-2 justify-center font-sans bg-orange-600 animation">
                  <h1 className="font-bold">Watch Now</h1>
                  <BiMoviePlay className="mt-2" />
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Additems;
