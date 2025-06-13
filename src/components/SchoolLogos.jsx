import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SchoolLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const schools = [
    {
      id: 1,
      name: `Eulogio "Amang" Rodriguez Institute of Science and Technology`,
      logo: "/earist-logo-1.png",
    },
    {
      id: 2,
      name: "Aurora State College of Technology",
      logo: "/ASCOT-LOGO-768x768.png",
    },
    { id: 3, name: "Bulacan Agricultural State College", logo: "/Basc.png" },
    {
      id: 4,
      name: "Bataan Peninsula State University",
      logo: "/BPSU_Logo.png",
    },
    {
      id: 5,
      name: "Bulacan State University",
      logo: "/bulsu_logo-D0uvsv43.png",
    },
    {
      id: 6,
      name: "Central Luzon State University",
      logo: "/clsu-logo-green.png",
    },
    {
      id: 7,
      name: "Nueva Ecija University of Science and Technology",
      logo: "/neust_logo.png",
    },
    {
      id: 8,
      name: "Pampanga State Agricultural University",
      logo: "/PSAU_logo.png",
    },
    {
      id: 9,
      name: "Philippine Merchant Marine Academy",
      logo: "/PMMA_Logo.png",
    },
    {
      id: 10,
      name: "President Ramon Magsaysay State University",
      logo: "/President_Ramon_Magsaysay_State_University.png",
    },
    {
      id: 11,
      name: "Tarlac Agricultural University",
      logo: "/Tarlac_Agricultural_University_logo.png",
    },
    {
      id: 12,
      name: "Eastern Samar State University",
      logo: "/ESSU_Logo_New_protected_1959_50.png",
    },
    {
      id: 13,
      name: "J.H. Cerilles State College",
      logo: "/jhcsclogo-transparent.png",
    },
    {
      id: 14,
      name: "Northern Bukidnon State College",
      logo: "/cropped-NBSC_NewLogo_icon.png",
    },
    {
      id: 15,
      name: "Northwestern Mindanao State College of Science and Technology",
      logo: "/nmscst_logo.png",
    },
    {
      id: 16,
      name: "Bukidnon State University",
      logo: "/buksu-logo-min-1024x1024.png",
    },
    { id: 17, name: "Davao del Sur State College", logo: "/dssc_logo.png" },
    {
      id: 18,
      name: "Cotabato State University",
      logo: "/CSU-OfficialSeal.png",
    },
    {
      id: 19,
      name: "Cotabato Foundation College of Science and Technology",
      logo: "/cfcst_logo.png",
    },
    { id: 20, name: "South Cotabato State College", logo: "/scsc_logo.png" },
    { id: 21, name: "Sultan Kudarat State University", logo: "/sksu1.png" },
    { id: 22, name: "Basilan State College", logo: "/Basilan_Logo.png" },
    { id: 23, name: "Davao de Oro State College", logo: "/DdOSC.png" },
    {
      id: 24,
      name: "University of Southern Mindanao",
      logo: "/usm_logo_Aug-2024.png",
    },
    {
      id: 25,
      name: "Don Honorio Ventura State University",
      logo: "/DHVSU-LOGO.png",
    },
    {
      id: 26,
      name: "Tawi-Tawi Regional Agricultural College",
      logo: "/Tawi-Tawi_logo.png",
    },
    {
      id: 27,
      name: "Jose Rizal Memorial State University",
      logo: "/JRMSU_logo.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % schools.length);
    }, 3000); // Change school every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SUCs Under Commissioner Apag III
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {schools.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center group hover:shadow-2xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-xl">
                    <motion.img
                      src={school.logo}
                      alt={school.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div>
                    <motion.h3
                      className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {school.name}
                    </motion.h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {schools.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolLogos;
