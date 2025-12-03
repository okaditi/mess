import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Veg - 1 Meal/Day",
    price: "₹2796 / month",
    features: [
      "Lunch or Dinner",
      "Fresh Veg Meal Daily",
      "Hygienic Packaging",
      "Doorstep Delivery",
    ],
    recommended: false,
  },
  {
    name: "Veg - 2 Meals/Day",
    price: "₹4500 / month",
    features: [
      "Lunch + Dinner",
      "Fresh Veg Meals Daily",
      "Customizable Dinner",
      "Monthly Menu Rotation",
    ],
    recommended: true,
  },
  {
    name: "Non-Veg - 2 Meals/Day",
    price: "₹5500 / month",
    features: [
      "Lunch + Dinner",
      "Non-Veg Included",
      "Sunday Biryani Special",
      "Delivery Included",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        zIndex: 210,
        padding: "100px 6% 120px",
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <p className="primary-subheading" style={{ marginBottom: "8px" }}>
        Pricing
      </p>

      <h2
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#ffffff",
        }}
      >
        Flexible & Affordable Pricing
      </h2>

      <p
        style={{
          color: "#cfcfcf",
          marginBottom: "48px",
          fontSize: "1.05rem",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Choose a plan that fits your daily meal needs. Fresh, homestyle food
        delivered every day — hygienic packaging, reliable timings, and flexible
        plans.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px",
          alignItems: "stretch",
        }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 30px rgb(255, 138, 80)",
            }}
            style={{
              width: "320px",
              padding: "36px 22px",
              backgroundColor: plan.recommended ? "#1e1e1e" : "#161616",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "box-shadow 0.25s ease",
            }}
          >
            {plan.recommended && (
              <div
                style={{
                  color: "#FF8A50",
                  fontWeight: 700,
                  marginBottom: "10px",
                  fontSize: "0.95rem",
                }}
              >
                ⭐ Most Popular
              </div>
            )}

            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "#ffffff",
                }}
              >
                {plan.name}
              </h3>

              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "18px",
                  color: "#faf9f9ff",
                  letterSpacing: "0.4px",
                }}
              >
                {plan.price}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  textAlign: "left",
                  margin: "0 4px",
                }}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      fontSize: "0.995rem",
                      color: "#d6d6d6",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "10px",
                        color: "#fffefdc8",
                        fontSize: "1.05rem",
                      }}
                    >
                      ✔
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{
                boxShadow: "0 0 5px rgb(255, 138, 80)",
                color: "#ffffff",
              }}
              whileTap={{}}
              style={{
                marginTop: "22px",
                padding: "12px 20px",
                backgroundColor: plan.recommended ? "#FF8A50" : "#1b6b76",
                color: "#0f0f0f",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 700,
                width: "100%",
                transition: "box-shadow 0.25s ease",
              }}
            >
              Select Plan
            </motion.button>
          </motion.div>
        ))}
      </div>

      <p
        style={{
          marginTop: "42px",
          fontSize: "1.05rem",
          color: "#ffffffff",
          fontWeight: 700,
        }}
      >
        Pay for 6 months & get ₹3000 OFF!
      </p>
    </section>
  );
};

export default Pricing;
