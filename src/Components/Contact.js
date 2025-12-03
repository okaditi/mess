import React from "react";
import PricesBackground from "../Assets/prices-background.jpg";

const Contact = () => {
  return (
    <div
      className="contact-page-wrapper"
      style={{
        height: "700px",
        width: "100%",
        padding: "0",
        margin: "0",
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.65)
          ),
          url(${PricesBackground})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="primary-heading" style={{ color: "white" }}>
        Have Question In Mind?
      </h1>

      <h1 className="primary-heading" style={{ color: "white" }}>
        Let Us Help You
      </h1>

      <div className="contact-form-container">
        <input type="text" placeholder="enter your query" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
