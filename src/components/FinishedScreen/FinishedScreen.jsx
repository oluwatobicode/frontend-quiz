/* eslint-disable react/prop-types */
import styles from "./FinishedScreen.module.css";
function FinishedScreen({ points, dispatch }) {
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
          <h3>8</h3>
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
