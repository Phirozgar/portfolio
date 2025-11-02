import "../styles/SeeYouLater.css";

const SeeYouLater = () => {
  return (
    <section className="seeyoulater-section">
      <div className="seeyoulater-content">
        <div className="seeyoulater-text">
          <h2>See You Later! 👋</h2>
          <p className="text-xl">Thanks for stopping by my portfolio! Hope you enjoyed the journey through my college life.</p>
          <p>
            Remember, life is full of ups and downs, but the key is to keep moving forward.
            <br/><span className="text-rose-700 font-bold font-netflix text-2xl">Don't forget to smile and stay positive!</span>
            <br/><span className="text-orange-500 font-bold font-netflix text-4xl mt-5">Come back anytime to explore more!</span>
          </p>
        </div>
        <div className="stack-syl">
          <div className="card-syl">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeYouLater;
