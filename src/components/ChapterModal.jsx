import React, { useState, useEffect } from "react";
import "../styles/ChapterModal.css";
import chaptersData from "../data/chapters.json";

const ChapterModal = ({ isOpen, onClose, chapterNumber, chapterName, chapterNotes }) => {
  const [currentChapter, setCurrentChapter] = useState(chapterNumber);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentChapter(chapterNumber);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, chapterNumber]);

  const handlePrevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < 34) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const currentChapterData = chaptersData.find(ch => ch.id === currentChapter);
  const displayName = currentChapterData?.name || chapterName || `Chapter ${currentChapter}`;
  const displayNotes = currentChapterData?.notes || chapterNotes || "Placeholder for Chapter notes. Add your content here.";

  if (!isOpen) return null;

  return (
    <div className="chapter-modal-overlay">
      <div className="chapter-modal">
        <div className="chapter-header">
          <h2 className="chapter-title">Chapter {currentChapter}</h2>
          <h3 className="chapter-name">{displayName}</h3>
        </div>

        <div className="chapter-content">
          <div className="chapter-notes">
            {displayNotes}
          </div>
        </div>

        <div className="chapter-navigation">
          <button
            className="nav-button prev-button"
            onClick={handlePrevChapter}
            disabled={currentChapter === 1}
          >
            ← Previous
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <button
            className="nav-button next-button"
            onClick={handleNextChapter}
            disabled={currentChapter === 34}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterModal;
