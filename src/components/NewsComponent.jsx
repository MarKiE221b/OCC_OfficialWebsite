import React from "react";
import { motion } from "framer-motion";
import { getNews } from "../api/news";

const NewsComponent = () => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [expandedDescription, setExpandedDescription] = React.useState(null);

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

  const LatestNewsSkeleton = () => (
    <div className="card bg-base-100 max-w-[1000px] shadow-xl animate-pulse">
      <div className="card-image relative">
        <div className="w-full h-[530px] bg-gray-300"></div>
      </div>
      <div className="card-body absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  );

  const NewsCardSkeleton = () => (
    <div className="carousel-item">
      <div className="card bg-base-100 w-96 shadow-xl animate-pulse">
        <div className="h-48 bg-gray-300"></div>
        <div className="card-body">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
        </div>
      </div>
    </div>
  );

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const base64ToImageSrc = (base64String) => {
    return base64String ? `data:image/jpeg;base64,${base64String}` : "";
  };

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center">Latest News!</h1>
      <div className="divider"></div>
      <div className="flex flex-col items-center">
        {isLoading ? (
          <LatestNewsSkeleton />
        ) : (
          <div className="card bg-base-100 max-w-[1000px] shadow-xl">
            <div className="card-image relative">
              <img
                src={news.latest?.coverPhotoUrl}
                alt="News"
                className="w-full h-[530px] object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="card-body absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <a
                  href={news.latest?.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.h2
                    className="card-title text-white text-2xl mb-2 hover:underline"
                    whileHover={{ scale: 1.01 }}
                  >
                    {news.latest?.title}
                  </motion.h2>
                </a>
                <p className="text-white text-opacity-90">
                  {truncateText(news.latest?.description, 150)}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="carousel carousel-center rounded-box max-w-full p-8 mt-10 gap-6">
          {isLoading
            ? Array(3)
                .fill()
                .map((_, i) => <NewsCardSkeleton key={i} />)
            : news.archive?.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <motion.div
                    className="card bg-base-100 w-96 shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <figure className="relative h-48">
                      <img
                        src={news.latest?.coverPhotoUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-lg">{item.title}</h2>
                      <p className="text-sm text-gray-600">
                        {truncateText(item.description, 100)}
                      </p>
                      <div className="card-actions justify-end mt-4">
                        <a
                          href={item.fbLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
