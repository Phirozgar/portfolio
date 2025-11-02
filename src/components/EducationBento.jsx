import React, { useState, useEffect } from "react";
import "../styles/EducationBento.css";
import ChapterModal from "./ChapterModal";
import chaptersData from "../data/chapters.json";

const EducationBento = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [noteColors, setNoteColors] = useState([]);

  // Original pastel color palette
  const pastelColors = ['#ffeaa7', '#a8e6cf', '#e1b3ff', '#a8d8ff', '#fab1a0', '#fdcb6e'];

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setChapters(chaptersData);
    // Create shuffled color array for all 34 notes
    const shuffledColors = [];
    for (let i = 0; i < 34; i++) {
      shuffledColors.push(pastelColors[i % pastelColors.length]);
    }
    // Shuffle the colors randomly
    const finalColors = shuffleArray(shuffledColors);
    setNoteColors(finalColors);
  }, []);

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
      className="py-10 bg-white text-orange-600 flex flex-col items-center"
    >
      <div className="education-header">
        <h2 className="text-5xl font-bold">This is how my time in Manipal has been</h2>
      </div>

      <div className="grid-wrapper">
        <div className="my-custom-grid-container">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className={`grid-box grid-box${chapter.id}`}
              onClick={() => handleBoxClick(chapter.id)}
              style={{ backgroundColor: noteColors[index] }}
            >
              <div className="chapter-number">{chapter.id}</div>
              <div className="chapter-name">{chapter.name}</div>
            </div>
          ))}
        </div>
      </div>

      <ChapterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        chapterNumber={selectedChapter}
        chapterName={chapters.find(ch => ch.id === selectedChapter)?.name || `Chapter ${selectedChapter}`}
        chapterNotes={chapters.find(ch => ch.id === selectedChapter)?.notes || ""}
      />
    </section>
  );
};

export default EducationBento;
