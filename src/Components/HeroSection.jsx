import React, { useState } from "react";
import kettle from "../assets/kettle.avif";
import instagram from "../assets/instagram.png";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [currectImage, setCurrectImage] = useState(kettle);

  return (
    <div>
      <section className="w-full flex">
        <article className="text-center p-5 w-[50%] flex justify-center items-center flex-col bg-[#ECF5FE] text-[#082237]">
          <p className="text-[24px]">IT'S ALWAYS</p>
          <div className="flex flex-col ">
            <h1 className="lg:text-[113px] m-0">TEA</h1>
            <h1 className="lg:text-[113px] m-0">TIME</h1>
          </div>
          <p className="text-[24px]">
            This is a space to welcome visitors to your site. Grab their
            attention with copy that clearly states what the site is about, and
            add an engaging image or video.
          </p>

          <button className="bg-[#082237] text-[#ECF5FE] mt-20 text-[24px] px-20 py-2">
            Shop Now
          </button>
        </article>
        <article className="w-[50%]">
          <img
            src={currectImage}
            alt=""
            // onMouseEnter={() => setCurrectImage(instagram)}
            // onMouseLeave={() => setCurrectImage(kettle)}
          />
        </article>
      </section>
    </div>
  );
};

export default HeroSection;
