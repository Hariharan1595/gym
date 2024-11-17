import { motion } from "framer-motion";
import { slideLeft } from "../utils/animation";

const Offers = () => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex items-center justify-center">
        <div className="text-center space-y-8 lg:p-40 ">
          <motion.h1
            variants={slideLeft(0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl font-bold lg:text-5xl capitalize"
          >
            Get 20% discount on your first order, are you ready to buy
          </motion.h1>
          <motion.p
            variants={slideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            We Will Make Sure you get the right and the best quality products
            for you workout
          </motion.p>
          <motion.div
            variants={slideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex gap-6 justify-center"
          >
            <button className="primary-btn">Learn More</button>
            <button
              className="border border-primary px-6 py-3 rounded-xl 
                text-primary font-bold"
            >
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
