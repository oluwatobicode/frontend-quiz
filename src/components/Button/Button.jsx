/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ answer, index, numQuestions, dispatch }) {
  if (answer === null)
    return (
      <div>
        <button className={styles.submitbtn}>Submit Answer</button>
        <div className={styles.error}>
          <img src="assets/images/icon-error.svg" alt="error" />
          <p>You need to select an Answer</p>
        </div>
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
        <button
          className={styles.submitbtn}
          onClick={() => {
            dispatch({ type: "finished" });
          }}
        >
          Finished
        </button>
      </div>
    );
  }
}

export default Button;
