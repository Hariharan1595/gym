import React from "react";
import { delay, motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { slideLeft } from "../utils/animation";

const Equipments = () => {
  const equipments = [
    {
      id: 0,
      title: "Yoga Equipments",
      des: "It is a long established fact that a reader will be by readable",
      icon: <GrYoga />,
      delay: 0.3,
    },
    {
      id: 1,
      title: "Muscles Equipments",
      des: "It is a long established fact that a reader will be by readable ",
      icon: <FaDumbbell />,
      delay: 0.6,
    },
    {
      id: 2,
      title: "Fitness Equipments",
      des: "It is a long established fact that a reader will be by readable ",
      icon: <GiGymBag />,
      delay: 0.6,
    },
  ];
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-2xl font-bold">
              What We offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader will be by readable
              content of a page when are the best product
            </p>
          </div>
          {equipments.map((item) => (
            <motion.div
              key={item.id}
              variants={slideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              className=" bg-[#fbfbfb] hover:bg-white
            rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] space-y-4 p-6"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.des}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
