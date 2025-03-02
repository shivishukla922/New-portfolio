import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="dev-sec" className="hero">
      <div className="hero-text-container">
        <h1 className="Main-head"> Hi there !</h1>
        <h1 className="shivi-sp"> I am Shivi</h1>
        <p className="soft-text">
          Passionate software developer specializing in crafting intuitive and
          efficient web applications with a focus on frontend technologies and
          user-centric design
        </p>
      </div>
      <img
        className="hero-img"
        src="https://assets-v2.lottiefiles.com/a/9fe12c24-1178-11ee-be5f-830c8b48a4db/lSplTbkydd.gif"
      />
    </div>
  );
};

export default Hero;
