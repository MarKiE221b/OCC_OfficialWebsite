import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import HeroComponent from "../components/HeroComponent.jsx";
import NewsComponent from "../components/NewsComponent.jsx";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", (e) => {
    setLoading(true);
  });

  return (
    <div>
      {loading ? (
        <>
          <div className="fixed top-0 w-full z-[100]">
            <Navbar />
          </div>

          {/* body */}
          <div className="container mx-auto px-10">
            <section id="home">
              <HeroComponent />
            </section>
            <section id="news">
              <NewsComponent />
            </section>
          </div>
        </>
      ) : (
        <div className="loading-wrapper">
          <div className="flex gap-8 items-center justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      )}
      {/* navigation  */}
    </div>
  );
};

export default MainLayout;
