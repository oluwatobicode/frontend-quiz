/* eslint-disable react/prop-types */
import styles from "./FinishedScreen.module.css";
function FinishedScreen({ points, dispatch, icon, name }) {
  {
    console.log(points);
  }
  return (
    <div className={styles.finished}>
      <div className={styles.text}>
        <h1>
          Quiz completed <span>You scored...</span>
        </h1>
      </div>
      <div className={styles.score}>
        <div className={styles.scoreBox}>
          <div className={styles.detail}>
            <img src={icon} alt={name} />
            <h4 className={styles.name}>{name}</h4>
          </div>
          <h3>{points}</h3>
          <p>out of 10</p>
        </div>
        <button
          className={styles.play}
          onClick={() => dispatch({ type: "playAgain" })}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default FinishedScreen;
