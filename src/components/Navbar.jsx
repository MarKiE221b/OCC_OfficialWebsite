import React from "react";
import { motion } from "framer-motion";
import chedLogo from "../assets/Commission_on_Higher_Education_(CHEd).svg.png";

const Navbar = () => {
  return (
    <div className="relative">
      {/* Christmas Decorations Wrapper */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Garland/Lights at top of navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: ["#ef4444", "#22c55e", "#fbbf24", "#3b82f6", "#ec4899"][i % 5],
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>

        {/* Left side Christmas Tree */}
        <motion.div
          className="absolute -left-2 top-1/2 -translate-y-1/2 text-4xl"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          🎄
        </motion.div>

        {/* Right side Santa */}
        <motion.div
          className="absolute -right-2 top-1/2 -translate-y-1/2 text-4xl"
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          🎅
        </motion.div>

        {/* Small decorative elements */}
        <motion.div
          className="absolute left-16 top-1 text-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⭐
        </motion.div>

        <motion.div
          className="absolute right-16 top-1 text-lg"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          🎁
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="navbar bg-base-100/80 backdrop-blur-md shadow-sm relative z-0"
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
            {["Home", "OCDRA Systems", "News", "Schools", "Appointment"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={
                      item === "Appointment"
                        ? "/appointment"
                        : item === "OCDRA Systems"
                        ? "/systems"
                        : `/#${item.toLowerCase()}`
                    }
                    className="font-medium"
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
