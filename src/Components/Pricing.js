import React from "react";
import { motion } from "framer-motion";
import Background from "../Assets/prices-background.jpg";

const plans = [
  {
    name: "Veg - 1 Meal/Day",
    price: "₹2799 / month",
    features: ["Lunch or Dinner", "Fresh Veg Meal Daily", "Hygienic Packaging", "Doorstep Delivery"],
    recommended: false,
  },
  {
    name: "Veg - 2 Meals/Day",
    price: "₹4500 / month",
    features: ["Lunch + Dinner", "Fresh Veg Meals Daily", "Customizable Dinner", "Monthly Menu Rotation"],
    recommended: true,
  },
  {
    name: "Non-Veg - 2 Meals/Day",
    price: "₹5500 / month",
    features: ["Lunch + Dinner", "Non-Veg Included", "Sunday Biryani Special", "Delivery Included"],
    recommended: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      style={{
        position: "relative",
        zIndex: 210,
        padding: "100px 6% 120px",
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        textAlign: "center",
        marginTop: "10px" 
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <p className="primary-subheading" style={{marginBottom:"8px"}}>Pricing</p>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#ffffff",
        }}
      >
        Flexible & Affordable Pricing
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ color: "#cfcfcf", marginBottom: "48px", fontSize: "1.05rem", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
      >
        Choose a plan that fits your daily meal needs. Fresh, homestyle food delivered every day — hygienic packaging, reliable timings, and flexible plans.
      </motion.p>

      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px",
          alignItems: "stretch"
        }}
        variants={containerVariants}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={
              plan.recommended
                ? {
                    scale: 1.06,
                    y: -8,
                    boxShadow: "0 30px 60px rgba(255,112,67,0.14)",
                  }
                : {
                    scale: 1.03,
                    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                  }
            }
            style={{
              width: "320px",
              padding: "36px 22px",
              backgroundColor: plan.recommended ? "#1e1e1e" : "#161616",
              color: "#fff",
              borderRadius: "14px",
              border: plan.recommended ? "2px solid rgba(255,112,67,0.95)" : "1px solid #222",
              boxShadow: plan.recommended ? "0 20px 50px rgba(255,112,67,0.08)" : "0 8px 30px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            {plan.recommended && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  color: "#FF8A50",
                  fontWeight: 700,
                  marginBottom: "10px",
                  fontSize: "0.95rem",
                }}
              >
                ⭐ Most Popular
              </motion.div>
            )}

            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px", color: "#ffffff" }}>
                {plan.name}
              </h3>

              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "18px",
                  color: "#FF9B5A",
                  letterSpacing: "0.4px"
                }}
              >
                {plan.price}
              </p>

              <ul style={{ listStyle: "none", padding: 0, textAlign: "left", margin: "0 4px" }}>
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
                    <span style={{ marginRight: "10px", color: "#FF9B5A", fontSize: "1.05rem" }}>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: "22px",
                padding: "12px 20px",
                backgroundColor: plan.recommended ? "#FF8A50" : "#1b6b76",
                color: "#0f0f0f",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 700,
                width: "100%"
              }}
            >
              Select Plan
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: "42px",
          fontSize: "1.05rem",
          color: "#FFB38A",
          fontWeight: 700,
        }}
      >
        Pay for 6 months & get ₹3000 OFF!
      </motion.p>
    </motion.section>
  );
};

export default Pricing;
