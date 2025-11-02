import React from "react";
import FloatingNav from "../components/FloatingNav.jsx";
import HeroSection from "../components/HeroSection";
import ManipalSection from "../components/ManipalSection.jsx";
import EducationBento from "../components/EducationBento";
import SectionDivider from "../components/SectionDivider.jsx";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      <FloatingNav />
      <HeroSection />
      <SectionDivider from="#000000" to="#1b1035" />
      <EducationBento />
      <SectionDivider from="#1b1035" to="#000000" />
      <ManipalSection />
    </div>
  );
};

export default Blog;
