import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Imported components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FormComponent from "./components/FormComponent";
import Footer from "./components/Footer";

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
        <WorkingProcess />
        <Team />
        <Testimonials />
        <FormComponent />
      </div>
      <div className="w-[100%] max-w-7xl mx-auto">
        <Footer />
      </div>
    </>
  </StrictMode>
);
