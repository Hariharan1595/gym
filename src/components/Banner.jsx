import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../utils/animation";

const Banner = ({ image, title, subTitle }) => {
  return (
    <div className="container">
      <div
        className="grid md:grid-cols-2 grid-cols-1
 space-y-6 p-14 md:space-y-0 space-x-6 bg-[#f9f9f9]"
      >
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={image}
            alt="img"
            className=" w-[300px] md:max-w-[400px] xl:min-w-[500px] h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4   lg:m-w-[500px]">
          <motion.p
            variants={slideUp(0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-xl lg:text-4xl text-center md:text-left font-bold font-playfair
      capitalize"
          >
            {title}
          </motion.p>
          <motion.p
            variants={slideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            {subTitle}
          </motion.p>
          <motion.div
            variants={slideUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
