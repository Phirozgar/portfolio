import "../styles/MoreAboutMe.css";

const MoreAboutMe = () => {
  return (
    <section className="moreabout-section">
      <div className="moreabout-content">
        <div className="stack">
          <div className="card">
            <div className="image" style={{ backgroundImage: 'url("/images/pics/MUTBI-bag.jpeg")', backgroundSize: "cover" }}></div>
          </div>
        </div>
        <div className="moreabout-text">
          <h2>Keep visiting! Byee!! 👋</h2>
          <p>
            Beyond the code, I love working on building relation, mentoring peers, and exploring
            tech that solves my problems and shapes the future. 
            <br/>There is a life out of the <span className="text-purple-500 font-bold font-netflix">GRIND, SWEAT and DREAMS</span> learn how to find it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
