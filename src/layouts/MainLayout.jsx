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
        >
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
