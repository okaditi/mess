import React, { useState, useEffect } from "react";
import RoadMap from "../Assets/roadmap.png";
import Pic from "../Assets/prices.png";
import Background from "../Assets/offer-back.png";

const Offers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "center" : "center",
        gap: isMobile ? "40px" : "0px",
        padding: "20px",
        position: "relative",
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      <img
        src={RoadMap}
        alt="Roadmap"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          zIndex: 2,
          display: "block"
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <img
          src={Background}
          alt="Background"
          style={{
            position: "absolute",
            right: isMobile ? "0px" : "0px",
            top: 0,
            width: isMobile ? "60%" : "31%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none"
          }}
        />

        <img
          src={Pic}
          alt="Offers"
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 2,
            display: "block"
          }}
        />
      </div>
    </div>
  );
};

export default Offers;
