import React from "react";
import { motion } from "framer-motion";
import kite1 from "../assets/kite1-removebg-preview.png";
import kite2 from "../assets/kite4-removebg-preview.png";
import kite3 from "../assets/kite3-removebg-preview.png";

export default function FlyingKites({ selectedData }) {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden">
      
      {/* Default kites */}
      <motion.div
        className="absolute left-20 top-40 flex flex-col items-center"
        animate={{ x: [-20, 20, -15, 10] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite1} alt="kite1" className="w-32" />
        <div className="w-0.5 h-64 bg-black/70"></div>
      </motion.div>

      <motion.div
        className="absolute left-60 top-52 flex flex-col items-center"
        animate={{ x: [-15, 25, -10, 15] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite2} alt="kite2" className="w-40" />
        <div className="w-0.5 h-72 bg-black/70"></div>
      </motion.div>

      <motion.div
        className="absolute left-96 top-32 flex flex-col items-center"
        animate={{ x: [-25, 30, -20, 15] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite3} alt="kite3" className="w-36" />
        <div className="w-0.5 h-80 bg-black/70"></div>
      </motion.div>

      {/* Captured Photo (User Kite) */}
      {selectedData?.photo && (
        <motion.div
          className="absolute left-1/2 top-1/2 flex flex-col items-center"
          animate={{ x: [-30, 30, -20, 25], y: [-20, 20, -15, 10] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        >
          <img src={selectedData.photo} alt="user-photo" className="w-32 rounded-xl shadow-lg" />
          <div className="w-0.5 h-64 bg-black/70"></div>
        </motion.div>
      )}
    </div>
  );
}
