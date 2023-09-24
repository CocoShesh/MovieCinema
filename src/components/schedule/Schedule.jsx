import React, { useState, useEffect, useContext } from "react";
import AddListContext from "../../AddListContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Data from "../../../public/data/movieData";
import { message } from "antd";
import "../../index.css";
import { BsPlusLg, BsFillPlayFill } from "react-icons/bs";
const category = [
  "All",
  "Romance",
  "Action",
  "Thriller",
  "Horror",
  "Adventure",
];
const Schedule = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "The Movie is Successully Added to Your Watchlist",
      className: "custom-class",
      style: {
        fontSize: "15px",
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    });
  };
  const [isClick, setIsClick] = useState("All");
  const { addListItems } = useContext(AddListContext);

  const handleCategoryItem = item => {
    setIsClick(item);
  };

  const filteredItem = Data.filter(item => {
    if (isClick === "All") {
      return true;
    } else {
      return item.category === isClick;
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        className="bg-[#000000] h-auto text-white pt-20  pb-10 px-10 max-md:pt-44 "
        id="Schedule"
      >
        {contextHolder}
        <h1 className="uppercase mb-5 text-xl"> Opening This Week</h1>
        <hr className="w-[600px] h-[3px] border-none bg-gradient-to-r from-red-500 to-black" />

        <section className="flex gap-5 pt-8 ">
          {category.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCategoryItem(item)}
                className={`w-[80px] h-[30px] m rounded-md uppercase text-xs bg-[#121212] mb-2  text-center hover:bg-orange-500 hover:text-white transition duration-500 ease-in-out max-sm:w-auto ${
                  isClick === item ? "bg-orange-500 text-white" : ""
                }`}
              >
                {item}
              </button>
            );
          })}
        </section>
        <section className="grid grid-cols-6 mt-5 gap-y-5 gap-x-5 max-sm:grid-cols-3 max-lg:grid-cols-4">
          {filteredItem.map(item => {
            return (
              <div
                data-aos="zoom-in"
                key={item.id}
                className="w-auto h-auto custom-shadow bg-[#121212] relative overflow-hidden"
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
                  className="absolute flex flex-col items-center justify-center w-full h-full bg-black opacity-0 transition-transform duration-300 ease-in-out z-10 top-0 left-0 overlay max-md:text-center  max-lg:text-center"
                  style={{
                    opacity: 0.7,
                    transform: "scale(0)",
                    transformOrigin: "center",
                  }}
                >
                  <p className="uppercase text-[18px] font-bold">
                    {item.title}
                  </p>

                  <div className="flex text-[30px]">
                    <div onClick={success} className="w-[30px] h-[30px]">
                      <BsPlusLg
                        className="cursor-pointer"
                        onClick={() => addListItems(item)}
                      />
                    </div>

                    <a href="#modal">
                      <BsFillPlayFill className="cursor-pointer" />
                    </a>
                  </div>
                </div>
                <img src={item.previewImg} className="w-[200px]" alt="" />
                <p className="text-center my-2 text-sm text-slate-200">
                  {item.length}{" "}
                  <span className="border-l-[1px] border-slate-500 pl-2">
                    {item.category}
                  </span>
                </p>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Schedule;
