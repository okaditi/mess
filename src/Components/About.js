import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section
    id="About">

  
    <div className="about-section-container"
    style={{paddingTop:"3rem"}}>
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
          We offer freshly prepared daily lunch and dinner delivery with a variety of vegetarian and non-vegetarian options to suit every preference. Our dinner plans are fully customizable, allowing you to choose dishes that best match your taste and dietary needs. You can also select flexible serving sizes, making it easy to order for individuals, families, or groups. With a menu that is updated every month, you’ll always enjoy new and exciting meals. We provide fast, reliable delivery to all apartments, offices, and colleges ensuring your food arrives hot and on time.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Book Trial</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Download Menu
          </button>
        </div>
      </div>
    </div>
      </section>
  );
};

export default About;