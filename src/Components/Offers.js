import React from "react";
import RoadMap from "../Assets/roadmap.png";
import Pic from "../Assets/prices.png";
import Background from "../Assets/offer-back.png";

const Offers = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        position: "relative",
        boxSizing: "border-box",
        flexWrap: "nowrap",      
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
          flexShrink: 1,      
          display: "block"
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          flexShrink: 1,        
          boxSizing: "border-box"
        }}
      >
        <img
          src={Background}
          alt="Background"
          style={{
            position: "absolute",
            right: "0px",
            top: 0,
            width: "31%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            marginTop: "0px",
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
