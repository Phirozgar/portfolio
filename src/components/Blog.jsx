import React from "react";
import FloatingNav from "../components/FloatingNav.jsx";
import HeroSection from "../components/HeroSection";
import ManipalSection from "../components/ManipalSection.jsx";
import EducationBento from "../components/EducationBento";
import SectionDivider from "../components/SectionDivider.jsx";
import "../styles/Blog.css";
import PlacementSection from "../components/PlacementSection";
import AdviceToJuniors from "../components/AdviceToJuniors";
import MoreAboutMe from "../components/MoreAboutMe";
import SeeYouLater from "../components/SeeYouLater";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      <FloatingNav/>
      <HeroSection/>
      <MoreAboutMe/>
      <EducationBento/>
      <ManipalSection/>
      <AdviceToJuniors/>
      <SeeYouLater />
      <Footer />
    </div>
  );
};

export default Blog;
