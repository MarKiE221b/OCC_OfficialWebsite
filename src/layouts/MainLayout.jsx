import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroComponent from "../components/HeroComponent.jsx";
import NewsComponent from "../components/NewsComponent.jsx";

const MainLayout = () => {
  return (
    <div>
      {/* navigation  */}
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
    </div>
  );
};

export default MainLayout;
