import React, { useState } from "react";
import "../styles/EducationBento.css";
import ChapterModal from "./ChapterModal";

const EducationBento = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBoxClick = (chapterNumber) => {
    setSelectedChapter(chapterNumber);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedChapter(null);
  };

  return (
    <section
      id="education"
      className="py-20 bg-transparent text-white flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-10">This is how my time in Manipal has been</h2>

      <div className="grid-wrapper">
        <div className="my-custom-grid-container">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className={`grid-box grid-box${i + 1}`}
              onClick={() => handleBoxClick(i + 1)}
            >
              <div className="chapter-number">{i + 1}</div>
              <div className="chapter-text">Chapter {i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <ChapterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        chapterNumber={selectedChapter}
        chapterName={`Chapter ${selectedChapter} of My College Journey`}
      />
    </section>
  );
};

export default EducationBento;
