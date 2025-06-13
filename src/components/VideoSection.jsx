import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  // Sample video data - update with actual videos
  const videos = [
    {
      id: 1,
      title: "CHED Commissioner Message",
      description: "Message from Commissioner Desiderio R. Apag III",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    },
    {
      id: 2,
      title: "CHED Programs Overview",
      description: "Learn about our latest initiatives and programs",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    },
    // Add more videos as needed
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Videos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.youtube.com/@CHEDRO10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Videos
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;