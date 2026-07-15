import React from "react";
import cup from "../assets/cup.avif";
import honey from "../assets/honey.avif";
import kettleLeft from "../assets/kettleLeft.avif";
import lemonmilttea from '../assets/lemonmilttea.avif'
import lemonsliceup from '../assets/lemonsliceup.avif'
import whitecraem from "../assets/whitecraem.avif";
import cookie from '../assets/cookie.avif'
import { NavLink } from "react-router-dom";

const BlogSection = () => {
  return (
    <div>
      <section className="h-240 font-mono relative text-center flex justify-center items-center">
        <img className="absolute w-37.5 -left-22 top-[70%] " src={cup} alt="" />
        <img
          className="absolute w-37.5 left-[8%] top-[50%]"
          src={honey}
          alt=""
        />
        <img
          className="absolute w-37.5 left-[25%] top-[36%] rotate-336"
          src={kettleLeft}
          alt=""
        />
        <img
          className="absolute w-37.5 left-[50%] top-[20%]"
          src={lemonsliceup}
          alt=""
        />
        <img
          className="absolute w-37.5 right-[20%] top-[30%] rotate-14"
          src={whitecraem}
          alt=""
        />
        <img
          className="absolute w-37.5  right-[8%] top-[50%]"
          src={lemonmilttea}
          alt=""
        />
        <img
          className="absolute w-37.5 right-0 top-[70%]"
          src={cookie}
          alt=""
        />
        <div className="">
          <h1 className="text-[64px] ">Read Our Blog</h1>
          <button className="bg-[#2D630C] text-white px-5 py-4 mt-5">
            Discover More
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
