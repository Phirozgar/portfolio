import React, { useState, useEffect } from "react";
import "../styles/ChapterModal.css";

const ChapterModal = ({ isOpen, onClose, chapterNumber, chapterName }) => {
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
    if (currentChapter < 18) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chapter-modal-overlay">
      <div className="chapter-modal">
        <div className="chapter-header">
          <h2 className="chapter-title">Chapter {currentChapter}</h2>
          <h3 className="chapter-name">{chapterName || `Chapter ${currentChapter} of My College Journey`}</h3>
        </div>

        <div className="chapter-content">
          <p>This is the content for Chapter {currentChapter}. You can add your story, experiences, and memories here.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
            disabled={currentChapter === 18}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterModal;
