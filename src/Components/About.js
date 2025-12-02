import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Know Us Better
        </h1>
        <p className="primary-text" style={{fontSize: "1.2rem", color: "white"
        }}>
          At Bittu’s Tiffin Service, we believe good food brings comfort—especially when it tastes like home.
          We prepare fresh, wholesome meals daily, using quality ingredients and traditional recipes. Whether you’re a student, working professional, or a busy family, our goal is to provide convenient, nutritious meals without compromising taste.
        </p>
        <p className="primary-text" style={{fontSize: "1.2rem", color: "white"}}>
          We offer: <br />
          • Daily lunch & dinner delivery <br />
          • Veg & Non-veg options <br />
          • Customizable dinner choices <br />
          • Flexible serving sizes <br />
          • Monthly menu updates <br />
          • Fast delivery to all apartments, offices & colleges along Kelambakkam–Vandalur Road <br />
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Book Trial</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Download Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;