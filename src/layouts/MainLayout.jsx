import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import HeroComponent from "../components/HeroComponent.jsx";
import NewsComponent from "../components/NewsComponent.jsx";
import SchoolLogos from "../components/SchoolLogos.jsx";
import VideoSection from "../components/VideoSection.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet, useLocation } from "react-router";
import Appointment from "../components/Appointment.jsx";

const MainLayout = () => {
  const location = useLocation();
  const isIdRoute = /\/[^/]+$/.test(location.pathname);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 bg-base-100 flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Christmas Body Decorations - Falling Snowflakes */}
          <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  fontSize: `${12 + Math.random() * 20}px`,
                  filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))'
                }}
                initial={{ top: -50, opacity: 0.8 }}
                animate={{
                  top: "110vh",
                  opacity: [0.8, 1, 0.4],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              >
                ❄
              </motion.div>
            ))}
          </div>

          {/* Floating Christmas Elements on Body */}
          <motion.div
            className="fixed top-32 left-8 text-5xl z-[90] pointer-events-none"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            🎁
          </motion.div>

          <motion.div
            className="fixed top-1/3 right-12 text-5xl z-[90] pointer-events-none"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            ⭐
          </motion.div>

          <motion.div
            className="fixed top-1/2 left-12 text-5xl z-[90] pointer-events-none"
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🎄
          </motion.div>

          <motion.div
            className="fixed bottom-1/3 right-8 text-5xl z-[90] pointer-events-none"
            animate={{
              x: [0, -10, 0],
              rotate: [0, 20, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            🎅
          </motion.div>

          <motion.div
            className="fixed top-2/3 left-16 text-4xl z-[90] pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            🔔
          </motion.div>

          <motion.div
            className="fixed bottom-1/4 right-16 text-4xl z-[90] pointer-events-none"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            🎀
          </motion.div>

          <div className="fixed top-0 w-full z-[100]">
            <Navbar />
          </div>
          <div className="">
            {isIdRoute ? (
              <Outlet />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <section id="home">
                  <HeroComponent />
                </section>

                <section id="news">
                  <NewsComponent />
                </section>
                {/* <section id="videos">
                  <VideoSection />
                </section> */}
                <section id="schools">
                  <SchoolLogos />
                </section>
              </motion.div>
            )}
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MainLayout;
