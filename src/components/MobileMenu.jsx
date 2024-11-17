import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-100}}
        className="absolute top-20 left-0  w-full h-screen z-20">
          <ul
            className="text-white bg-primary m-6 p-5 rounded-3xl
            flex items-center justify-center flex-col gap-10 text-xl font-semibold cursor-pointer"
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
