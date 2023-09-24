import React from "react";
import { SiYoutubetv } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <section className="bg-black border-t-[1px]   border-slate-700 py-10 text-white flex max-md:flex-col ">
        <div className="flex flex-col w-1/2 relative max-md:w-full  max-lg:w-auto">
          <img
            src="/public/assets/footer-bg.jpeg"
            className="w-[300px] max-md:w-auto"
            alt=""
          />
          <div className="absolute w-[400px]  right-20 max-md:right-0 max-md:top-0  max-lg:w-auto max-lg:right-0 max-lg:left-10 ">
            <h1 className=" uppercase font-bold text-xl italic mb-5">
              {" "}
              Cinema
            </h1>
            <p className="text-xs mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut
              fugiat cum expedita sit, rerum explicabo doloremque voluptatibus
              perferendis quidem!
            </p>
            <div className="flex gap-2">
              <FaSquareXTwitter className="text-[25px]" />
              <RiFacebookCircleFill className="text-[25px]" />
              <FaSquareInstagram className="text-[25px]" />
              <FiYoutube className="text-[25px]" />
            </div>
          </div>
        </div>

        <section className="flex gap-10  max-md:grid max-md:grid-cols-2 max-md:mx-auto ">
          <div>
            <p className="font-bold uppercase  mb-2"> Useful Links</p>
            <ul className="text-sm leading-7 ">
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Home
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Movies
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> My
                List
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Terms
                of Service
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span>{" "}
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase  mb-2">Our Cinemas</p>
            <ul className="text-sm  text-slate-200  leading-7 ">
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span>{" "}
                Delerum Opto
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Nom
                Newm Reum
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Cras
                Femerum Odie
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span> Jusko
                Eport
              </li>
              <li>
                <span className="text-[12px] text-slate-400"> &gt;</span>{" "}
                Fermerum Lucia
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8">
            <div>
              <p className="font-bold uppercase mb-2">Contact Us</p>
              <ul className="text-sm">
                <li>Street Name </li>
                <li>City Name State 12345</li>
                <li>Taguig</li>
              </ul>
            </div>
            <div>
              <p>
                <span className="font-bold">Phone : </span>+63 1234 567 8910
              </p>
              <p>
                <span className="font-bold">Email : </span> cinema@gmail.com
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="border-t-[1px] bg-black border-slate-700 w-full h-auto text-white text-center py-5 text-sm">
        <p>&copy; Copyright DStudio Technology. All Rights Reserved.</p>
        <p>
          Design Copied by{" "}
          <span className="text-red-500">
            {" "}
            <a
              href="https://www.youtube.com/@DStudioTechnology"
              target="_blank"
            >
              DStudio Technology.
            </a>{" "}
          </span>{" "}
        </p>
        <p>
          {" "}
          Developed by{" "}
          <span className="text-blue-500 uppercase">
            {" "}
            <a href="https://github.com/CocoShesh" target="_blank">
              Nard.
            </a>{" "}
          </span>
        </p>
      </section>
    </>
  );
};

export default Footer;
