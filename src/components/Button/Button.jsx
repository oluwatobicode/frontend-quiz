/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ answer, index, numQuestions, dispatch }) {
  if (answer === 1)
    return (
      <div>
        <button className={styles.submitbtn}>Submit Answer</button>
      </div>
    );

  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className={styles.submitbtn}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1) {
    return (
      <div>
        <button className={styles.submitbtn} onClick={{ type: "finished" }}>
          Finished
        </button>
      </div>
    );
  }
}

export default Button;
