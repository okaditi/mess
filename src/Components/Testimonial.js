import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Reviews</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Our customers love the taste, freshness, and consistency of our meals. Here’s what they have to say about choosing us for their everyday food.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          “Best homemade food service I’ve tried. Tastes just like home!”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ananya R.</h2>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          “Affordable and hygienic. I like that the dinner can be customized. The chapati and sabji always taste fresh, never stale.”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Priya S.</h2>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          “Best tiffin service around Kelambakkam–Vandalur Road.”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ananya R.</h2>
      </div>
    </div>
  );
};

export default Testimonial;