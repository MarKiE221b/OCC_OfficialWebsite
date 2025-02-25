import React from "react";
import { motion } from "motion/react";
import newsPic from "/481016959_122102664104780727_8473814497198948735_n.jpg";
import newsPic04 from "/480804446_122099162876780727_4871707216048770163_n.jpg";
import newsPic01 from "/480321847_122095993496780727_6466117076114279057_n.jpg";
import newsPic02 from "/480423809_122096703920780727_5724953174008993874_n.jpg";
import newsPic03 from "/480641552_122098909280780727_97071336431614504_n.jpg";

const NewsComponent = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold">Latest News!</h1>
      <div className="divider"></div>
      {/* latest news */}
      <div className="flex flex-col items-center">
        <div className="card bg-base-100 max-w-[1000px] shadow-xl">
          <div className="card-image relative">
            <img
              src={newsPic}
              alt="News"
              className="w-full h-[530px] object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="card-body absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
            <a
              href="https://www.facebook.com/share/p/1Dr78LZCdo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.h2
                className="card-title text-white pb-5 cursor-pointer hover:underline text-base"
                whileHover={{
                  scale: 1.01, // Slightly increase the size of the card on hover
                  y: -5, // Elevate the card by 10px on hover
                  transition: { duration: 0.3 }, // Smooth transition duration
                }}
              >
                State Colleges and Universities Athletic Association of Region 3
                (SCUAA 3)
              </motion.h2>{" "}
            </a>
          </div>
        </div>

        {/* previous news */}

        <div className="carousel carousel-center rounded-box max-w-full space-x-4 p-8 mt-5">
          {/* 1 */}
          <div className="carousel-item">
            <motion.a
              className="card bg-base-100 w-96 shadow-xl cursor-pointer"
              whileHover={{
                scale: 1.05, // Slightly increase the size of the card on hover
                y: -10, // Elevate the card by 10px on hover
                transition: { duration: 0.3 }, // Smooth transition duration
              }}
              href="https://www.facebook.com/share/p/1QLgNFSSyJ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={newsPic01} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  The new Commissioner of the Commission on Higher Education
                </h2>
                <div className="card-actions justify-end"></div>
              </div>
            </motion.a>
          </div>
          {/* 2 */}
          <div className="carousel-item">
            <motion.a
              className="card bg-base-100 w-96 shadow-xl cursor-pointer"
              whileHover={{
                scale: 1.05, // Slightly increase the size of the card on hover
                y: -10, // Elevate the card by 10px on hover
                transition: { duration: 0.3 }, // Smooth transition duration
              }}
              href="https://www.facebook.com/share/p/1A4YePeiGB/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={newsPic02} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Official Oath Taking.</h2>
                <div className="card-actions justify-end"></div>
              </div>
            </motion.a>
          </div>
          {/* 3 */}
          <div className="carousel-item">
            <motion.a
              className="card bg-base-100 w-96 shadow-xl cursor-pointer"
              whileHover={{
                scale: 1.05, // Slightly increase the size of the card on hover
                y: -10, // Elevate the card by 10px on hover
                transition: { duration: 0.3 }, // Smooth transition duration
              }}
              href="https://www.facebook.com/share/p/18VDzUnBjt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={newsPic03} alt="First Board Meeting" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">First Board Meeting</h2>
                <div className="card-actions justify-end">
                  {/* Add any actions here if needed */}
                </div>
              </div>
            </motion.a>
          </div>

          <div className="carousel-item">
            <motion.a
              className="card bg-base-100 w-96 shadow-xl cursor-pointer"
              whileHover={{
                scale: 1.05, // Slightly increase the size of the card on hover
                y: -10, // Elevate the card by 10px on hover
                transition: { duration: 0.3 }, // Smooth transition duration
              }}
              href="https://www.facebook.com/share/p/18VDzUnBjt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={newsPic04} alt="First Board Meeting" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  External evaluator for the FY 2024 Annual Performance Review
                  and Program Planning Workshop of Tarlac Agricultural
                  University, helds at SMX Convention Center Clark.
                </h2>
                <div className="card-actions justify-end">
                  {/* Add any actions here if needed */}
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
