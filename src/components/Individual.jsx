import React from "react";
import marc_ind from "/Temp photo.png";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "motion/react";

const Individual = () => {
  return (
    <div className="hero min-h-screen py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <motion.img
            src={marc_ind}
            className="max-w-xl rounded-lg"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 1 }}
          />

          <motion.div
            className="mt-5 flex gap-5"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear", duration: 1 }}
          >
            <div className="flex text-sm items-center">
              <IoMdPhonePortrait size={"20px"} />
              <p>+63991-505-2490</p>
            </div>

            <div className="flex text-sm items-center">
              <IoIosMail size={"20px"} />
              <p>maespiritu@ched.gov.ph</p>
            </div>

            <button
              className="btn btn-circle btn-ghost"
              onClick={() => {
                window.open("https://github.com/MarKiE221b", "_blank");
              }}
            >
              <FaGithub size={"30px"} />
            </button>
            <button
              className="btn btn-circle btn-ghost"
              onClick={() => {
                window.open("https://www.facebook.com/mamark12x", "_blank");
              }}
            >
              <FaFacebook size={"30px"} />
            </button>
          </motion.div>
        </div>

        <div className="lg:ml-5">
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 1 }}
            className="text-4xl"
          >
            Hi! I am{" "}
            <span className="text-4xl font-bold">MARC ANTHONY ESPIRITU</span>
          </motion.h1>

          <motion.p
            className="py-6 text-justify"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 1.5 }}
          >
            I’m a full-stack developer at CHED Central Office, where I focus on
            creating efficient and scalable web applications. I specialize in
            JavaScript, React, and Tailwind CSS for front-end development,
            ensuring smooth and responsive user interfaces. On the backend, I
            work with pure JavaScript and utilize MySQL and MongoDB for database
            management. I’m passionate about delivering high-quality solutions
            and continuously enhancing my skills to meet the evolving needs of
            the organization.
          </motion.p>

          <motion.div
            className="mb-2"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 2.5 }}
          >
            <h3 className="text-xl font-bold">Projects</h3>
            <ul className="list-inside list-disc">
              <li>CHED10 Scholarship Management System</li>
              <li>CHED10 Human Resource Management System</li>
              <li>CHED10 Pre-SO Submission System. (PreSO)</li>
            </ul>
          </motion.div>

          <motion.div
            className="mb-2"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 3 }}
          >
            <h3 className="text-xl font-bold">Certificates</h3>
            <ul className="list-inside list-disc">
              <li>ComTIA IT Fundamentals</li>
              <li>CISCO CyberSecurity</li>
              <li>8th TOPCIT Level 2</li>
              <li>9th TOPCIT Level 2</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
