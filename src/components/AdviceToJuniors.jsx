import React from "react";
import "../styles/AdviceToJuniors.css";

const AdviceToJuniors = () => {
  const adviceList = [
    { title: "Be Curious", subtitle: "Keep exploring beyond syllabus" },
    { title: "Trust the Process", subtitle: "Believe that you're made for great things and that you'll reach there eventually" },
    { title: "A little respect goes a long way", subtitle: "Be a nice person, good things will find you!" },
    { title: "It's okay to fail, but get back up quicker", subtitle: "Mistakes are stepping stones" },
    { title: "Take Initiative & Ownership", subtitle: "Initiative > Instructions" },
    { title: "Surround yourself with friends that want to grow", subtitle: "The right company matters the most" },
  ];

  return (
    <>
      {/* Advice Section */}
      <section className="advice-section">
        <h2 className="advice-heading">Advice to Juniors 💡</h2>
        <div className="advice-container">
          {adviceList.map((advice, index) => (
            <div key={index} className="container noselect">
              <div className="canvas">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className={`tracker tr-${i + 1}`}></div>
                ))}
                <div id="card" className={`pastel-card-${index % 6}`}>
                  <div className="title">{advice.title}</div>
                  <div className="subtitle">{advice.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AdviceToJuniors;
