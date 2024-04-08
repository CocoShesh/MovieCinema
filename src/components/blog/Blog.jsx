import React, { useEffect } from "react";
import blog from "../../../public/data/blogData";
import "../header/style.css";
import Aos from "aos";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section
        className="bg-black pt-10 pb-44 px-10 text-white h-full  "
        id="blog"
      >
        <h1 className="uppercase mb-5 text-xl">Our Blog</h1>
        <hr className="lg:w-[600px] h-[3px] border-none bg-gradient-to-r from-red-500 to-black" />

        <section className="grid grid-cols-4 gap-10 mt-10 max-md:grid-cols-1 max-md:gap-y-10 max-md:w-full max-lg:grid-cols-2 max-lg:gap-10">
          {blog.map(item => {
            return (
              <div
                data-aos="zoom-in"
                key={item.id}
                className="  bg-shadow hover:brightness-90 cursor-pointer "
              >
                <LazyLoadImage
                  height={300}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={item.thumbnail}
                  className=" max-md:w-auto max-lg:w-auto "
                  alt=""
                />
                <div className="pl-5 pb-5 pt-2">
                  <p className="uppercase typing">{item.category}</p>
                  <p className="mx-auto pt-4 hover:text-red-500">
                    {item.title}
                  </p>
                  <section className="flex items-center gap-2 mt-5">
                    <img
                      src={item.author.image}
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                    <div>
                      <p> {item.author.name}</p>
                      <p className="text-slate-500">{item.date}</p>
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Blog;
