import React, { useState } from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div
          className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2
            border-gray-300/10 text-white"
        >
          <div className="py-8 px-4 space-y-4">
            <div className="flex text-2xl font-bold uppercase  items-center gap-2">
              <FaDumbbell />
              <p>fit</p>
              <p className="text-secondary">zone</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptatibus unde animi odit! Dicta nobis sequi esse a soluta aut!
            </p>
            <div className="flex gap-4 text-3xl">
              <a href="#">
                <HiLocationMarker />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="flex flex-col gap-5 py-8 px-4">
              <h1 className="sm:text-left text-xl font-bold text-justify">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Help</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 py-8">
              <h1 className="sm:text-left text-xl font-bold text-justify">
                Company
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Privacy & Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 py-8 px-4">
              <h1 className="sm:text-left text-xl font-bold text-justify">
                Our Services
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-800" />
          <p className="text-center py-4 text-white">
            © {currentDate.getFullYear()} FitZone. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
