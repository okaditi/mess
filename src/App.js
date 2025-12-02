import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial.js";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
// import Servicing from "./Components/Servicing";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, #444, transparent)",
          margin: "60px 0",
        }}
      />
      <Work />
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, #444, transparent)",
          margin: "60px 0",
        }}
      />
      <Pricing />
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, #444, transparent)",
          margin: "60px 0",
        }}
      />
      <Testimonial />
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, #444, transparent)",
          margin: "60px 0",
        }}
      />
      <Contact />
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, #444, transparent)",
          margin: "60px 0",
        }}
      />
      <Footer />
    </div>
  );
}

export default App;