import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose from our curated Veg and Non-Veg menus, updated every month.",
    },
    {
      image: ChooseMeals,
      title: "Flexible Meal Options",
      text: "1 Meal/Day (Lunch or Dinner) or 2 Meals/Day (Lunch & Dinner) options available.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Service available to all apartments, hostels, PGs, offices, and campus locations in the Kelambakkam–Vandalur stretch.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">Services we provide</h1>
        <p className="primary-text" style={{color:"white"}}>
          Meals include rice/roti combinations, curries, dal, sabji, biryani, sweets, and more. Dinner can be customized—Idli, Dosa, sambar, chutney & other requests are available.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;