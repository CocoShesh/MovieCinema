import React, { useEffect, useState } from "react";
import Data from "../../../public/data/movieData";
import "../../index.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import Aos from "aos";

const CommingSoon = () => {
  const [page, setPage] = useState(1);
  const perPage = 6;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const displayedPage = Data.slice(startIndex, endIndex);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section
        className="bg-black py-10 px-10 text-white h-full "
        id="coming-soon"
      >
        <h1 className="uppercase mb-5 text-xl"> Coming Soon</h1>
        <hr className="w-[600px] h-[3px] border-none bg-gradient-to-r from-red-500 to-black custom-animation" />

        <section className="grid grid-cols-6 mt-10 gap-x-4 max-md:grid-cols-2 max-md:gap-y-5 max-lg:grid-cols-3 max-lg:gap-y-5">
          {displayedPage.map(item => {
            return (
              <div data-aos="zoom-in" key={item.id} className="custom-shadow">
                <img
                  src={item.previewImg}
                  className="w-[200px] max-md:w-auto max-lg:w-auto "
                  alt=""
                />
                <div className="flex items-center justify-center gap-3 py-2 bg-orange-600 uppercase text-sm animation">
                  <p> Add To Calendar</p>
                  <AiTwotoneCalendar className=" text-lg" />
                </div>
              </div>
            );
          })}
        </section>
        <section
          data-aos="zoom-in"
          className="flex items-center justify-center mt-10 gap-5"
        >
          <button
            className="w-[50px] h-[50px] bg-[#121212] rounded-md"
            style={{
              backgroundColor: page === 1 ? "rgb(233, 88 ,12)" : "#121212 ",
            }}
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className="w-[50px] h-[50px] bg-[#121212] rounded-md"
            style={{
              backgroundColor: page === 2 ? "rgb(233, 88 ,12)" : "#121212",
            }}
            onClick={() => setPage(2)}
          >
            2
          </button>
          <button
            className="w-[50px] h-[50px] bg-[#121212] rounded-md"
            style={{
              backgroundColor: page === 3 ? "rgb(233, 88 ,12)" : "#121212",
            }}
            onClick={() => setPage(3)}
          >
            3
          </button>
        </section>
      </section>
    </>
  );
};

export default CommingSoon;
