import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import commPicture from "/comm_pic.png";

const HeroComponent = () => {
  const [bibleVerse, setBibleVerse] = useState({
    text: "",
    reference: "",
    loading: true
  });

  useEffect(() => {
    // Fetch Bible verse from API
    fetch("https://bible-api.com/?random=verse")
      .then(response => response.json())
      .then(data => {
        setBibleVerse({
          text: data.text.replace(/[\r\n]+/g, ' ').trim(),
          reference: data.reference,
          loading: false
        });
      })
      .catch(error => {
        console.error("Error fetching Bible verse:", error);
        setBibleVerse({
          text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
          reference: "Jeremiah 29:11",
          loading: false
        });
      });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero bg-base-100 min-h-screen py-12 relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(60deg,#00000077_25%,transparent_25.5%,transparent_75%,#00000077_75%,#00000077)] bg-[length:80px_140px]"></div>
      </div>

      <div className="hero-content flex-col items-center justify-center lg:flex-row gap-12 relative z-10">
        <motion.img 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={commPicture} 
          className="lg:max-w-xl hover:scale-105 transition-transform duration-300"
          alt="Commissioner"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
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
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
              Desiderio R. Apag III
            </span>
          </h1>
          <p className="py-6 text-white/80">
            Dedicated to advancing higher education and fostering academic excellence across the Philippines.
          </p>

          {/* Bible Verse Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-lg"
          >
            {bibleVerse.loading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-primary/20 rounded w-full"></div>
                <div className="h-3 bg-primary/20 rounded w-1/2"></div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-3">
                  "{bibleVerse.text}"
                </p>
                <p className="text-primary font-semibold text-sm">
                  - {bibleVerse.reference}
                </p>
              </motion.div>
            )}
          </motion.div>

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
