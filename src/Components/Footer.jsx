import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import leaf from "../assets/leaf.avif";
import facebook from "../assets/social.png";
import instagram from "../assets/instagram.png";
import pintrest from "../assets/pintrest.png";

const Footer = () => {
  const [value, setValue] = useState({ email: "", checkbox: false });
  const [onClick, setOnClick] = useState(false);
  const [onSpan, setOnSpan] = useState(false);
  const [show, setShow] = useState("");
  return (
    <footer className=" h-[120vh] bg-[#082237] text-white p-5">
      <section className="flex justify-between gap-5 h-[60%] ">
        <div className=" flex flex-col justify-between ">
          <NavLink to="/" className="font-semibold text-2xl">
            🍀 Bloom's Tea
          </NavLink>
          <div className="">
            <p className="text-5xl ">Get to Know </p>
            <p className="text-5xl ">Bloom's Tea Better</p>
          </div>
        </div>
        <div className=" flex flex-col justify-around w-[50%] ">
          <div className="flex justify-around w-full">
            <NavLink to="/visit" className="border-b-2 font-mono text-2xl">
              Visit Our Store
            </NavLink>
            <p className="font-mono text-[20px]">
              Customer Service: 123-456-7890
            </p>
          </div>
          <div className="flex justify-around items-center w-full">
            <div className="flex flex-col gap-5">
              <p className="py-3 w-full ">HELP</p>
              <NavLink
                to={"#nav"}
                className="border-b-2 font-mono text-[20px] "
              >
                Terms & Conditions
              </NavLink>
              <NavLink
                to={"#nav"}
                className="border-b-2 font-mono text-[20px] "
              >
                Shipping Policy
              </NavLink>
              <NavLink
                to={"#nav"}
                className="border-b-2 font-mono text-[20px] "
              >
                Refund Policy
              </NavLink>
            </div>
            <div className="flex flex-col gap-5">
              <p className="py-3 w-full ">FOLLOW US</p>
              <NavLink
                to={"/teas"}
                className="font-mono text-[20px] border-b-2  "
              >
                Shop
              </NavLink>
              <NavLink
                to={"/extras"}
                className="font-mono text-[20px] border-b-2  "
              >
                Extras
              </NavLink>
              <NavLink
                to={"/about"}
                className="font-mono text-[20px] border-b-2  "
              >
                About
              </NavLink>
              <NavLink
                to={"/blog"}
                className="font-mono text-[20px] border-b-2  "
              >
                Blog
              </NavLink>
              <NavLink
                to={"/contact"}
                className="font-mono text-[20px] border-b-2  "
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between w-full items-center h-[40%] border-b-2 border-white">
        <div className="">
          <img src={leaf} alt="" />
          <div className="flex grayscale-100 gap-3 p-2">
            <span>
              <img
                className="brightness-0 invert cursor-pointer"
                width={35}
                height={35}
                src={facebook}
                alt=""
              />
            </span>
            <span>
              <img
                className="brightness-0 invert cursor-pointer"
                width={35}
                height={35}
                src={instagram}
                alt=""
              />
            </span>
            <span>
              <img
                className="brightness-0 invert cursor-pointer"
                width={35}
                height={35}
                src={pintrest}
                alt=""
              />
            </span>
          </div>
        </div>
        <form
          className="bg-[#B3CE8F] font-mono text-black h-50 p-2 w-[50%]"
          onSubmit={(e) => (
            e.preventDefault(),
            console.log(value),
            setValue({ email: "", checkbox: false })
          )}
        >
          <label htmlFor="email">Enter your email here*</label>
          <div className="flex gap-4 w-full border justify-between">
            <input
              onClick={() => setOnClick(true)}
              onChange={(e) => (
                setValue({ ...value, email: e.target.value }),
                setOnClick(false)
              )}
              type="text"
              name=""
              id=""
              className="border-b-2 w-[70%] outline-none"
              value={value.email}
              required
            />
            <button type="submit" className="cursor-pointer border px-5 py-3">
              Subscibe Now
            </button>
          </div>
          {value.email.length > 0 && value.email.length < 10 && (
            <p className="text-red-500">Please enter your email</p>
          )}
          <div className="flex gap-2 items-center mt-3 ">
            <input
              className=""
              type="checkbox"
              name=""
              id=""
              value={value.checkbox}
              onClick={() => setOnSpan(!onSpan)}
              required
            />
            <span>Yes, Subscribe me to your newsletter. *</span>
          </div>
          <p className={`${onSpan ? "hidden" : "block "} font-sans`}>
            Check the inbox to Continue
          </p>
        </form>
      </div>
      <article className="flex justify-between text-black bg-[#082237] w-full py-4">
        <p>
          &copy; 2026 Bloom's Tea. All rights reserved. | Designed by Muzammil
        </p>

        <NavLink to={"/accessibility"} className="border-b-2">
          Accessibility Statement
        </NavLink>
        <NavLink to={"/privacy-policy"} className="border-b-2">
          Privacy Policy
        </NavLink>
      </article>
    </footer>
  );
};

export default Footer;
