import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Errorpage = () => {
  const navigate = useNavigate(); // For React Router v5 (if you're using React Router v6, use `useNavigate`)

  const goBack = () => {
    navigate("/"); // Navigate to home page
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-6xl font-extrabold mb-4"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Oops! Page not found.
        </motion.p>
        <motion.button
          className="bg-black text-white py-2 px-4 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
          onClick={() => goBack()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Errorpage;
