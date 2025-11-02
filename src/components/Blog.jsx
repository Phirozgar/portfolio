import React from "react";
import FloatingNav from "../components/FloatingNav.jsx";
import HeroSection from "../components/HeroSection";
import ManipalSection from "../components/ManipalSection.jsx";
import EducationBento from "../components/EducationBento";
import SectionDivider from "../components/SectionDivider.jsx";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      <FloatingNav />
      <div className="fade-overlay"><HeroSection /></div>
      <SectionDivider from="#000000" to="#1b1035" />
      <div className="fade-overlay"><EducationBento /></div>
      <SectionDivider from="#1b1035" to="#000000" />
      <div className="fade-overlay"><ManipalSection /></div>
    </div>
  );
};

export default Blog;
