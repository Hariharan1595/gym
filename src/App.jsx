import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { background, img1, img_3 } from "./assets";
import Equipments from "./components/Equipments";
import Banner from "./components/Banner";
import Workout from "./components/Workout";
import Reviews from "./components/Reviews";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

const App = () => {
  const banner1 = {
    image: img1,
    title: "Transform Your Physique with Expert Muscle Training",
    subTitle:"A gym is a dedicated space equipped with a variety of fitness machines and weights, designed for strength training and cardiovascular workouts. It often features a range of exercise equipment like treadmills, dumbbells, and stationary bikes. Many gyms also offer group fitness classes and personal training sessions."
  };
  const banner2 = {
    image: img_3,
    title: "The Important To Take care of yourself",
    subTitle:"A gym is a dedicated space equipped with a variety of fitness machines and weights, designed for strength training and cardiovascular workouts. It often features a range of exercise equipment like treadmills, dumbbells, and stationary bikes. Many gyms also offer group fitness classes and personal training sessions."
  };
  const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroungRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };

  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...banner1} />
      <Workout/>
      <Banner {...banner2} />
      <Reviews/>
      <Offers/>
      <Footer/>
    </div>
  );
};

export default App;
