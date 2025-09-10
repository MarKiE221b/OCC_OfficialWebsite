import React from "react";
import { motion } from "framer-motion";
import commPicture from "/comm_pic.png";

const HeroComponent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero bg-base-100 min-h-screen py-12 relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(60deg,#00000077_25%,transparent_25.5%,transparent_75%,#00000077_75%,#00000077)] bg-[length:80px_140px]"></div>
      </div>
      <div className="hero-content flex-col items-center justify-center lg:flex-row gap-12">
        <motion.img 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={commPicture} 
          className="lg:max-w-xl  hover:scale-105 transition-transform duration-300"
          alt="Commissioner"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Mabuhay!
          </motion.h1>
          <h1 className="text-3xl">
            Welcome to the Office of Commissioner{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Desiderio R. Apag III
            </span>
          </h1>
          <p className="py-6 text-gray-600">
            Dedicated to advancing higher education and fostering academic excellence across the Philippines.
          </p>
          <motion.a 
            href="/#news" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See What's up!
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroComponent;
