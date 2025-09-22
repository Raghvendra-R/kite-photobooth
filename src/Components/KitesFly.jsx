import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import kite1 from "../assets/kite1-removebg-preview.png";
import kite2 from "../assets/kite4-removebg-preview.png";
import kite3 from "../assets/kite3-removebg-preview.png";

// Clouds, Sun, and Wind background canvas
function CloudsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let startTime = Date.now();

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clouds array
    const clouds = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.6,
      radius: 30 + Math.random() * 40,
      opacity: 0.5 + Math.random() * 0.5,
      speed: 0.2 + Math.random() * 0.5,
    }));

    // Draw cloud
    function drawCloud(x, y, r, opacity) {
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.arc(x + r * 0.8, y - r * 0.4, r * 0.9, 0, Math.PI * 2);
      ctx.arc(x + r * 1.5, y, r, 0, Math.PI * 2);
      ctx.arc(x + r * 2, y - r * 0.3, r * 0.7, 0, Math.PI * 2);
      ctx.closePath();
      ctx.shadowColor = "rgba(255,255,255,0.8)";
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw sun
    function drawSun(time) {
      ctx.save();
      ctx.translate(canvas.width - 100, 100);
      ctx.rotate(time * 0.5);

      // Sun rays
      ctx.strokeStyle = "#faab6bff";
      ctx.lineWidth = 3;
      for (let i = 0; i < 10; i++) {
        ctx.save();
        ctx.rotate((Math.PI * 2 / 8) * i);
        ctx.beginPath();
        ctx.moveTo(0, -40);
        ctx.lineTo(0, -55);
        ctx.stroke();
        ctx.restore();
      }

      // Sun body
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(0, 0, 25, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = "#FF8C00";
      ctx.beginPath();
      ctx.arc(-6, -5, 2, 0, Math.PI * 2);
      ctx.arc(6, -5, 2, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.beginPath();
      ctx.arc(0, 5, 8, 0, Math.PI);
      ctx.strokeStyle = "#FF8C00";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = (Date.now() - startTime) / 1000;

      drawSun(time);

      // Wind streaks
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 20; i++) {
        const startX = (Date.now() / 25 + i * 250) % canvas.width;
        const y = (i * 60) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(startX + 80, y);
        ctx.stroke();
      }

      // Draw clouds
      clouds.forEach((cloud) => {
        drawCloud(cloud.x, cloud.y, cloud.radius, cloud.opacity);
        cloud.x += cloud.speed;
        if (cloud.x - cloud.radius > canvas.width) {
          cloud.x = -cloud.radius * 2;
          cloud.y = Math.random() * canvas.height * 0.6;
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}

export default function FlyingKites({ selectedData }) {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-200 via-sky-400 to-sky-600 overflow-hidden">
      {/* Clouds, Sun & Wind Background */}
      <CloudsCanvas />

      {/* Default kites */}
      <motion.div
        className="absolute left-20 top-40 flex flex-col items-center"
        animate={{ x: [-20, 20, -15, 10], y: [-10, 10, -5, 5] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite1} alt="kite1" className="w-32 drop-shadow-lg" />
        <div className="w-0.5 h-64 bg-black/70"></div>
      </motion.div>

      <motion.div
        className="absolute left-60 top-52 flex flex-col items-center"
        animate={{ x: [-15, 25, -10, 15], y: [-5, 5, -8, 8] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite2} alt="kite2" className="w-40 drop-shadow-lg" />
        <div className="w-0.5 h-72 bg-black/70"></div>
      </motion.div>

      <motion.div
        className="absolute left-96 top-32 flex flex-col items-center"
        animate={{ x: [-25, 30, -20, 15], y: [-12, 12, -8, 8] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={kite3} alt="kite3" className="w-36 drop-shadow-lg" />
        <div className="w-0.5 h-80 bg-black/70"></div>
      </motion.div>

      {/* User photo kite */}
      {selectedData?.photo && (
        <motion.div
          className="absolute left-1/2 top-1/2 flex flex-col items-center"
          animate={{ x: [-30, 30, -20, 25], y: [-20, 20, -15, 10] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        >
          <img src={selectedData.photo} alt="user-photo" className="w-32 drop-shadow-lg" />
          <div className="w-0.5 h-64 bg-black/70"></div>
        </motion.div>
      )}
    </div>
  );
}
