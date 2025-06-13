import React from "react";
import { motion } from "framer-motion";
import chedLogo from "../assets/Commission_on_Higher_Education_(CHEd).svg.png";

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="navbar bg-base-100/80 backdrop-blur-md shadow-sm"
    >
      <div className="flex-1 gap-2">
        <motion.img 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          src={chedLogo} 
          className="h-10 w-10" 
          alt="CHED Logo"
        />
        <motion.h1 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          whileHover={{ scale: 1.05 }}
        >
          OCDRA
        </motion.h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {["Home", "News", "Schools"].map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`/#${item.toLowerCase()}`}
                className="font-medium"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
