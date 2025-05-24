import React from "react";
import { motion } from "motion/react";
import newsPic from "/481016959_122102664104780727_8473814497198948735_n.jpg";
import newsPic04 from "/480804446_122099162876780727_4871707216048770163_n.jpg";
import newsPic01 from "/480321847_122095993496780727_6466117076114279057_n.jpg";
import newsPic02 from "/480423809_122096703920780727_5724953174008993874_n.jpg";
import newsPic03 from "/480641552_122098909280780727_97071336431614504_n.jpg";

import { getNews } from "../api/news";
import { base } from "motion/react-client";

const NewsComponent = () => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setIsLoading(false);
      });
  }, []);

  function base64ToImageSrc(base64String) {
    if (!base64String) return "";
    // If already has data:image prefix, return as is
    if (base64String.startsWith("data:image")) return base64String;
    // Default to jpeg, adjust if needed
    return `data:image/jpeg;base64,${base64String}`;
  }

  const LatestNewsSkeleton = () => (
    <div className="card bg-base-100 max-w-[1000px] shadow-xl animate-pulse">
      <div className="card-image relative">
        <div className="w-full h-[530px] bg-gray-300"></div>
      </div>
      <div className="card-body absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );

  const NewsCardSkeleton = () => (
    <div className="carousel-item">
      <div className="card bg-base-100 w-96 shadow-xl animate-pulse">
        <div className="h-48 bg-gray-300"></div>
        <div className="card-body">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold">Latest News!</h1>
      <div className="divider"></div>
      <div className="flex flex-col items-center">
        {isLoading ? (
          <LatestNewsSkeleton />
        ) : (
          <div className="card bg-base-100 max-w-[1000px] shadow-xl">
            <div className="card-image relative">
              <img
                src={base64ToImageSrc(news.latest?.coverPhotoBase64)}
                alt="News"
                className="w-full h-[530px] object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="card-body absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
              <a
                href={news.latest?.fbLink}
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
                  {news.latest?.title}
                </motion.h2>{" "}
              </a>
            </div>
          </div>
        )}

        <div className="carousel carousel-center rounded-box max-w-full space-x-4 p-8 mt-5">
          {isLoading ? (
            <>
              <NewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </>
          ) : (
            news.archive?.map((item, index) => (
              <div className="carousel-item" key={index}>
                <motion.a
                  className="card bg-base-100 w-96 shadow-xl cursor-pointer"
                  whileHover={{
                    scale: 1.05, // Slightly increase the size of the card on hover
                    y: -10, // Elevate the card by 10px on hover
                    transition: { duration: 0.3 }, // Smooth transition duration
                  }}
                  href={item.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <img src={base64ToImageSrc(item.coverPhotoBase64)} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </motion.a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
