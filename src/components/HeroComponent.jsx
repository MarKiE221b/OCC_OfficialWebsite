import React from "react";
import { motion } from "framer-motion";
import commPicture from "/D72_3714_White.jpg";

const HeroComponent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero bg-base-100 min-h-screen py-12"
    >
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
            Welcome to the Office of The Commissioner{" "}
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
