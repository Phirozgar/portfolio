import "../styles/MoreAboutMe.css";

const MoreAboutMe = () => {
  return (
    <section className="moreabout-section">
      <div className="moreabout-content">
        <div className="stack">
          <div className="card">
            <div className="image"></div>
          </div>
        </div>
        <div className="moreabout-text">
          <h2>It's nice to meet you!👋</h2>
          <p className="text-xl">I know you're gonna ask me about how college is going... LEMME TELL YOU ALL ABOUT IT!</p>
          <p>
            Beyond coding, I am working on building relations, helping out my peers, 
            and finding new ways to solves my problems. And BADMINTON! and FOOTBALL! I love those as well.
            <br/><span className="text-rose-800 font-bold font-netflix text-2xl">Life might be full of ups and downs, but all you gotta do to get back on track is...</span>
            <br/><span className="text-orange-500 font-bold font-netflix text-4xl mt-5">Just smile, happiness will find you!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
