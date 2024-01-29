// MovieSlider.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Data from "../../../public/data/movieData";
import "swiper/css";
import "swiper/css/effect-cards";
import "../header/style.css";

const MovieSlider = ({
  onImageClickFirst,
  onImageClickSecond,
  onImageClickThird,
}) => {
  const [Click, setClick] = useState("");
  const Slice1 = Data.slice(0, 5);
  const Slice2 = Data.slice(5, 10);
  const Slice3 = Data.slice(11, 15);

  const handleClickFirst = (event, movie) => {
    setClick(movie.bgImg);
    onImageClickFirst(
      movie.bgImg,
      movie.title,
      movie.year,
      movie.titleImg,
      movie.description,
      movie.length,
      movie.ageLimit,
      movie.video,
      movie.date,
      movie.previewImg
    );
  };

  const handleClickSecond = (event, movie) => {
    setClick(movie.bgImg);
    onImageClickSecond(
      movie.bgImg,
      movie.title,
      movie.year,
      movie.titleImg,
      movie.description,
      movie.length,
      movie.ageLimit,
      movie.video,
      movie.date
    );
  };

  const handleClickThird = (event, movie) => {
    setClick(movie.bgImg);
    onImageClickThird(
      movie.bgImg,
      movie.title,
      movie.year,
      movie.titleImg,
      movie.description,
      movie.length,
      movie.ageLimit,
      movie.video,
      movie.date
    );
  };

  return (
    <>
      <section className="flex w-[800px] max-sm:max-w-[380px] max-sm:gap-5  items-center justify-center custom-shadow mx-auto mb-5 p-10 rounded-[20px] h-[250px] pt-10 max-md:w-auto max-md:gap-10 max-md:h-auto max-md:m-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper shadow-lg  "
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={900}
        >
          {Slice1.map(item => (
            <SwiperSlide
              key={item.id}
              className="h-[200px]  max-md:h-[150px]  "
            >
              <img
                src={item.previewImg}
                className="h-[200px] max-md:h-[150px] "
                alt=""
                onClick={event => handleClickFirst(event, item)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper shadow-lg"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={900}
        >
          {Slice2.map(item => (
            <SwiperSlide key={item.id} className="h-[200px]  max-md:h-[150px]">
              <img
                src={item.previewImg}
                className="h-[200px]  max-md:h-[150px]"
                alt=""
                onClick={event => handleClickSecond(event, item)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper shadow-lg "
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={900}
        >
          {Slice3.map(item => (
            <SwiperSlide key={item.id} className="h-[200px]  max-md:h-[150px]">
              <img
                src={item.previewImg}
                className="h-[200px]  max-md:h-[150px]"
                alt=""
                onClick={event => handleClickThird(event, item)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default MovieSlider;
