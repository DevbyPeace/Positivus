import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Imported components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CaseStudies from "./components/Casestudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-5 px-6 ">
        <Hero />
        <Sponsors />
        <Services />
        <Contact />
        <CaseStudies />
        <WorkingProcess/>
        <Team/>
      </div>
    </>
  </StrictMode>
);
