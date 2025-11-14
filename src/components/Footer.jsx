import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";
import chedLogo from "../assets/Commission_on_Higher_Education_(CHEd).svg.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Christmas Footer Decorations */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Christmas Lights String at Top */}
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: ["#ef4444", "#22c55e", "#fbbf24", "#3b82f6", "#ec4899"][i % 5],
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.06,
              }}
            />
          ))}
        </div>

        {/* Falling Snowflakes in Footer */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`snow-${i}`}
            className="absolute text-white text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 15}px`,
            }}
            initial={{ top: -20, opacity: 0.7 }}
            animate={{
              top: "100%",
              opacity: [0.7, 1, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          >
            ❄
          </motion.div>
        ))}

        {/* Corner Christmas Trees */}
        <motion.div
          className="absolute top-8 left-4 text-6xl"
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

        <motion.div
          className="absolute top-8 right-4 text-6xl"
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          🎄
        </motion.div>

        {/* Santa and Gifts */}
        <motion.div
          className="absolute bottom-8 left-1/4 text-5xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          🎅
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-1/4 text-4xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          🎁
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ⭐
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(150deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000),linear-gradient(60deg,#00000077_25%,transparent_25.5%,transparent_75%,#00000077_75%,#00000077)] bg-[length:80px_140px]"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <img src={chedLogo} alt="CHED Logo" className="w-16 h-16" />
                <div>
                  <h2 className="text-2xl font-bold">OCDRA</h2>
                  <p className="text-sm text-white/80">
                    Office of Commissioner Desiderio R. Apag III
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, link: "https://www.facebook.com/OCDRA3" },
                  { icon: FaTwitter, link: "https://twitter.com/PhCHED" },
                  { icon: FaYoutube, link: "https://www.youtube.com/@CHEDRO10" },
                  { icon: FaInstagram, link: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <IoLocation className="flex-shrink-0" />
                  <p>
                    Higher Education Development Center Building, C.P. Garcia
                    Avenue, U.P. Campus
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCall className="flex-shrink-0" />
                  <p>(02) 8441-1260</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMail className="flex-shrink-0" />
                  <p>info@ched.gov.ph</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Latest News", href: "#news" },
                  { name: "Partner Schools", href: "#schools" },
                  { name: "Videos", href: "#videos" },
                  { name: "Official Website", href: "https://ched.gov.ph" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="transition-colors hover:text-white/80"
                  >
                    <a href={link.href} className="block">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-sm text-white/60">
              &copy; {new Date().getFullYear()} Office of Commissioner Desiderio
              R. Apag III. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;