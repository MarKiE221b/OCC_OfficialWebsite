import React from "react";
import commPicture from "/D72_3714_White.jpg";

const HeroComponent = () => {
  return (
    <div className="hero bg-base-100 min-h-screen py-12">
      <div className="hero-content flex-col items-center justify-center lg:flex-row">
        <img src={commPicture} className="lg:max-w-xl rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold mb-2">Mabuhay!</h1>
          <h1 className="text-3xl">
            Welcome to the Office of The Commissioner{" "}
            <span className="font-bold">Desiderio R. Apag III</span>.
          </h1>
          <p className="py-6">{/* description */}</p>
          <a href="/#news" className="btn btn-primary">
            See What's up!
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
