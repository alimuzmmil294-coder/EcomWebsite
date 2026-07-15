import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/social.png";
import instagram from "../assets/instagram.png";
import pintrest from "../assets/pintrest.png";
import UserImage from "../assets/person.png";
import cart from "../assets/add-to-cart.png";

const Navbar = () => {
  const Paths = [
    { id: 1, name: "TEAS", path: "/teas" },
    { id: 1, name: "CONTACT", path: "/contact" },
    { id: 1, name: "BLOG", path: "/blog" },
    { id: 1, name: "ABOUT", path: "/about" },
    { id: 1, name: "EXTRAS", path: "/extras" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <header className="bg-[#092338] text-white py-3">
        <nav id="nav" className="text-center">
          <ul className="border-b-2 p-2 border-white flex justify-between ">
            {Paths.map((item) => (
              <li className=" border-r pr-35">
                <NavLink key={item.id} to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex justify-between items-center p-2 text-[22px]">
          <div className="flex grayscale-100 gap-3 p-5">
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
          <NavLink to={"/"} className={"cursor-pointer hover:text-gray-200"}>
            🍀 Bloom's Tea{" "}
          </NavLink>

          <div className="flex gap-5 justify-center items-center">
            <img
              className="brightness-0 invert cursor-pointer"
              src={UserImage}
              width={40}
              alt=""
            />

            <p className="cursor-pointer hover:text-gray-200 ">Log In</p>

            <img
              className="brightness-0 invert cursor-pointer"
              src={cart}
              alt=""
              width={40}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
