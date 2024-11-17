import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { navMenu } from "../utils/data";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdClose, MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container flex items-center justify-between py-5">
      <div className="flex text-2xl font-bold uppercase items-center gap-2">
        <FaDumbbell />
        <p>fit</p>
        <p className="text-secondary">zone</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-start gap-6 text-gray-600">
          {navMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="hover:text-primary inline-block px-3 py-1 font-semibold "
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="text-2xl hover:bg-primary hover:text-white *:first-letter:first-line:marker:selection:file:placeholder:
        rounded-full p-2 duration-200 hidden md:block"
        >
          <CiSearch />
        </button>
        <button
          className="text-2xl hover:bg-primary hover:text-white *:first-letter:first-line:marker:selection:file:placeholder:
        rounded-full p-2 duration-200 hidden md:block"
        >
          <PiShoppingCartThin />
        </button>
        <button
          className="border-2 border-primary px-6 py-2 hover:bg-primary hover:text-white font-semibold
        rounded-md duration-200 text-primary hidden md:block"
        >
          Login
        </button>
      </div>
      <div
        className="md:hidden text-4xl text-secondary  "
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose /> : <MdMenu />}
        <MobileMenu open={open} />
      </div>
    </div>
  );
};

export default Navbar;
