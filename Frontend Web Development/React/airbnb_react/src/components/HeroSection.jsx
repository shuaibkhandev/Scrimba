import React from "react";
import HeroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={HeroImg} width={"60%"} className="hero-img" />

      <div className="hero-content">
        <h1 className="hero-heading">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
