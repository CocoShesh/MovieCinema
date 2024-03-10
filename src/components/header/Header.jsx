import React, { useState, useRef, useEffect, useContext } from "react";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import { AiFillHome, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import Data from "../../../public/data/movieData";
import { BsBookmark } from "react-icons/bs";
import { Modal } from "antd";
import addListContext from "../../AddListContext";

import "./style.css";
import MovieSlider from "../Slider/MovieSlider";
import Aos from "aos";
import "aos/dist/aos.css";
import Drawer from "./drawer/ShowDrawer";
import ShowDrawer from "./drawer/ShowDrawer";
const Header = () => {
  const iframeRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(
    Data.find(item => item.id === 1)
  );
  const { items, addListItems, setItems } = useContext(addListContext);
  const [bgImage, setBgImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [titleImg, setTitleImg] = useState("");
  const [video, setVideo] = useState("");
  const [date, setDate] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const handleVideo = () => {
    Data.find(item => item.id === 1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addList = () => {
    addListItems({
      previewImg: previewImg,
      title: movieTitle,
    });
  };

  const handleImageClickFirst = (
    imageUrl,
    title,
    year,
    titleImg,
    description,
    length,
    ageLimit,
    video,
    date,
    previewImg
  ) => {
    setBgImage(`url('${imageUrl}')`);
    setMovieTitle(title);
    setYear(year);
    setDescription(description);
    setLength(length);
    setAgeLimit(ageLimit);
    setTitleImg(titleImg);
    setVideo(video);
    setDate(date);
    setPreviewImg(previewImg);
  };

  const handleImageClickSecond = (
    imageUrl,
    title,
    year,
    titleImg,
    description,
    length,
    ageLimit,
    video,
    date
  ) => {
    setBgImage(`url('${imageUrl}')`);
    setMovieTitle(title);
    setYear(year);
    setDescription(description);
    setLength(length);
    setAgeLimit(ageLimit);
    setTitleImg(titleImg);
    setVideo(video);
    setDate(date);
  };
  const handleImageClickThird = (
    imageUrl,
    title,
    year,
    titleImg,
    description,
    length,
    ageLimit,
    video,
    date
  ) => {
    setBgImage(`url('${imageUrl}')`);
    setMovieTitle(title);
    setYear(year);
    setDescription(description);
    setLength(length);
    setAgeLimit(ageLimit);
    setTitleImg(titleImg);
    setVideo(video);
    setDate(date);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <header
        className="h-full pb-10 max-md:h-[1000px]"
        style={{
          backgroundImage: bgImage ? bgImage : `url('${Data[0].bgImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg h-[850px]  max-md:h-[1000px] "></div>
        <nav className="flex items-center justify-between  pt-5 px-12 text-white sticky h-auto w-full   ">
          <section>
            <h1 className="uppercase logo">cinema</h1>
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

          <ShowDrawer />
        </nav>
        <section className="flex items-center justify-center sticky pt-20 custom-animation max-lg:flex-col max-lg:w-auto  ">
          {selectedItem && (
            <>
              <div className="hero  ">
                <div className="hero-content  flex-col lg:flex-row p-0 ">
                  <div className="text-center lg:text-left max-sm:max-w-xs sm:max-w-lg   md:max-w-2xl lg:pl-20">
                    <img
                      src={titleImg ? titleImg : selectedItem.titleImg}
                      className="max-sm:max-w-xs  max-w-sm"
                    />

                    <div className="stats lg:stats-horizontal   bg-transparent max-w-xs">
                      <div className="stat  ">
                        <div className="stat-title text-white">
                          {year ? year : selectedItem.year}
                        </div>
                      </div>
                      <div className="stat">
                        <div className="stat-title  text-white">
                          {ageLimit ? ageLimit : selectedItem.ageLimit}
                        </div>
                      </div>
                      <div className="stat">
                        <div className="stat-title  text-white">
                          {length ? length : selectedItem.length}
                        </div>
                      </div>
                      <div className="stat">
                        <div className="stat-title  text-white">
                          {selectedItem.category}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm max-sm:text-justify text-white  ">
                      {description ? description : selectedItem.description}
                    </p>
                    <section className="flex gap-5 mt-5">
                      <button className=" flex items-center gap-2 bg-white rounded-md text-red-500 uppercase font-bold max-sm:w-full max-md:w-full max-lg:w-48 w-48 h-[30px] justify-center">
                        <BsBookmark />
                        Book
                      </button>
                      <button
                        onClick={() => addList(items.id)}
                        className=" flex items-center gap-2 bg-red-700 rounded-md  text-white uppercase font-bold max-md:w-full  max-sm:w-full max-lg:w-48 h-[30px]  w-48  justify-center"
                      >
                        <AiOutlinePlus /> My List
                      </button>
                    </section>
                  </div>
                  <div>
                    <section className=" flex flex-col text-white date active max-md:left-0">
                      <div>
                        <h1 className="xl:text-8xl max-lg:text-6xl  md:text-7xl  max-sm:text-5xl break-words  text-center max-md:w-auto ">
                          On {date ? date : selectedItem.date}
                        </h1>
                      </div>
                      <div className="flex items-center justify-center gap-5 mt-5">
                        <span className="flex items-center justify-center  ">
                          <div className="  w-[80px] h-[80px] rounded-full bg-transparent effect   custom-shadow   border-[1px] ">
                            <BsFillPlayCircleFill
                              className=" fill-red-700 text-[65px] m-2  cursor-pointer hover:scale-90 hover:brightness-90 "
                              onClick={showModal}
                            />
                          </div>
                          <section className="flex flex-col ml-10">
                            <p className=" trailer "> Watch Trailer</p>
                            <hr className="w-[170px]    line" />
                          </section>
                        </span>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        <section className="mt-[3em] w-full   relative ">
          <section className=" absolute  left-[20.9%] w-[800px] h-[250px] rounded-[50px]    bg-[#121212]  opacity-30  blur-xl"></section>
          <MovieSlider
            onImageClickFirst={handleImageClickFirst}
            onImageClickSecond={handleImageClickSecond}
            onImageClickThird={handleImageClickThird}
          />
        </section>
      </header>
      <Modal
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        bodyStyle={{ height: "400px" }}
        footer={null}
        id="modal"
      >
        <iframe
          width="100%"
          height="100%"
          src={video ? video : selectedItem.video}
          allowFullScreen
          ref={iframeRef}
        ></iframe>
      </Modal>
    </>
  );
};

export default Header;
