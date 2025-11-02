import React, { useState, useEffect } from "react";
import "../styles/EducationBento.css";
import ChapterModal from "./ChapterModal";
import chaptersData from "../data/chapters.json";

const EducationBento = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [noteColors, setNoteColors] = useState([]);

  // Generate random pastel colors for post-it notes
  const generateRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 20); // 70-90%
    const lightness = 80 + Math.floor(Math.random() * 15); // 80-95%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  useEffect(() => {
    setChapters(chaptersData);
    // Generate random colors for all 34 notes
    const colors = Array.from({ length: 34 }, () => generateRandomPastelColor());
    setNoteColors(colors);
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
