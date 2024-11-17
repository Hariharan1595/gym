import React, { useState } from "react";
import { productData } from "../utils/data";
import { motion } from "framer-motion";

const Workout = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];
  const filterCard =
    activeTab === "All"
      ? productData
      : productData.filter((card) => card.catagory === activeTab);
  return (
    <div>
      <div className="container my-12 md:my-16">
        <div className="flex space-x-4 mb-6 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab ? "bg-primary" : "text-white bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterCard.map((cards) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded shadow-md space-y-2 p-4 "
            >
              <img src={cards.image} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;
