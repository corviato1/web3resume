import React from "react";
import "../App.css";
import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>\\ Systems Administrator //</h1>
      <p>IT Consultant. Network Admin. Dapp Developer. Cryptocurrency Miner.</p>
      <h3>Site Powered by IPFS and FLEEK</h3>
      <img className="Alex" src="images/image-A.jpg" />
    </div>
  );
}

export default HeroSection;
