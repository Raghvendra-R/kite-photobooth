import React from "react";
import { motion } from "framer-motion"; // Animation
import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";

const Header = () => {
  return (
    <div
      id="Header"
      className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container text-center mx-auto flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 text-black flex-grow">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Explore Home that Fit Your Dreams
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="space-x-4 mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="border border-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-white hover:text-black transition"
          >
            Project
          </a>
          <a
            href="#contact"
            className="bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base text-white hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
