import React from "react";
import { FaPlay } from "react-icons/fa";
import { heroimg } from "../assets";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../utils/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:p-0 font-playfair gap-8">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={slideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-3xl lg:text-5xl font-bold leading-relaxed xl:leading-normal"
            >
              Elevate Your Workout. Experience Fitness{" "}
              <span className="text-primary">Redefined.</span>
            </motion.h1>
            <motion.p
              variants={slideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 xl:max-w-[500px]"
            >
              At Peak Performance Gym, we believe in pushing boundaries and
              achieving new heights. Our state-of-the-art equipment, expert
              trainers, and supportive community are here to help you reach your
              peak potential.
            </motion.p>
            <motion.div
              variants={slideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center gap-8 md:justify-start"
            >
              <button className="primary-btn">Order Now</button>
              <button className="flex justify-center items-center gap-2">
                <FaPlay /> Watch Now
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 50 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            src={heroimg}
            alt="img"
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
