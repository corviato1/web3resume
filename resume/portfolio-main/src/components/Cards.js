import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import CardItem2 from "./CardItem2";
import CardItem3 from "./CardItem3";
import CardItem4 from "./CardItem4";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/20190724_160431_001.jpg"
              text="Cardboard Raspberry Pi Arcade"
              path="/services"
            />
            <CardItem2
              src="images/20201118_171032.jpg"
              text="Filecoin Node and Miner"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem3
              src="images/20210110_174753.jpg"
              text="3D Printing"
              path="/products"
            />
            <CardItem4
              src="images/20190807_160449.jpg"
              text="Gaming PC"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
