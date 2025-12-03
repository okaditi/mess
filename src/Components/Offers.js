import React from "react";
import RoadMap from "../Assets/roadmap.png";
import Pic from "../Assets/prices.png";
import Background from "../Assets/offer-back.png";

const Offers = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "190px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        position: "relative",
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
            right: "-90px",
            top: 0,
            width: "40%",
            height: "130%",
            objectFit: "cover",
            zIndex: 0,
            marginTop: "-95px",
            marginBottom: "200px",
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
          }}
        />
      </div>
    </div>
  );
};

export default Offers;
