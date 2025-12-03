import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";

const slides = [image1, image2, image3];

const AUTO_PLAY_INTERVAL = 2000;
const SWIPE_THRESHOLD = 50;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (isPaused) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const startX = touchStartXRef.current;
    const endX = touchEndXRef.current;
    if (startX == null || endX == null) {
      touchStartXRef.current = null;
      touchEndXRef.current = null;
      return;
    }
    const diff = startX - endX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) next();
      else prev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
    id="Home">
    <div
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <Navbar />

      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero Slide ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              opacity: i === index ? 1 : 0,
              transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out",
              transform: i === index ? "scale(1)" : "scale(1.03)",
              pointerEvents: i === index ? "auto" : "none",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            textAlign: "center",
            color: "white",
            maxWidth: "80%",
            padding: "0 1rem",
          }}
        >
          <h1
            style={{
              fontSize: "4.3rem",
              fontWeight: 400,
              marginBottom: "15px",
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              letterSpacing: "4px",
            }}
          >
            BITTU'S TIFFIN SERVICES
          </h1>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "15px",
              fontFamily: '"Playfair Display", "Times New Roman", Times, serif',
              fontWeight: 700,
            }}
          >
            Fresh. Homemade. Delivered Daily.
          </h2>

          <p
            style={{
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.5,
              color: "#d0d0d0",
            }}
          >
            Enjoy delicious, homestyle vegetarian and non-vegetarian meals
            delivered to your home, office, or campus along the
            Kelambakkam–Vandalur Road.
          </p>
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: 4,
            background: "rgba(255,255,255,0.85)",
            border: "none",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 4,
            background: "rgba(255,255,255,0.85)",
            border: "none",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "100%",
            zIndex: 4,
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
