/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
function Button({ answer, index, numQuestions, dispatch }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    if (!answer) {
      setErrorMessage("You need to select an answer");
    }
  };

  const navigate = useNavigate();

  if (answer === null)
    return (
      <div>
        <button className={styles.submitbtn} onClick={handleSubmit}>
          Submit Answer
        </button>
        <div className={styles.error}>
          {errorMessage && (
            <img src="assets/images/icon-error.svg" alt="error" />
          )}
          <p>{errorMessage}</p>
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
            navigate(-1);
          }}
        >
          Finished
        </button>
      </div>
    );
  }
}

export default Button;
