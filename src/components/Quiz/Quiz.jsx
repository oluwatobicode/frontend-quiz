/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Progress from "../Progress/Progress";
import styles from "./Quiz.module.css";
function Quiz({ question, index, dispatch, numQuestions, icon, title }) {
  const answer = question.answer;
  const hasAnswered = answer != null;
  return (
    <div className={styles.container}>
      <Navbar icon={icon} title={title} />
      <div className={styles.question}>
        <div className={styles.text}>
          <h4>
            Question {index + 1} out of {numQuestions}
          </h4>
          <h1>{question.question}</h1>
          <div>
            <Progress
              index={index}
              answer={answer}
              numQuestions={numQuestions}
            />
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            {question.options.map((opt, index) => (
              <div key={opt}>
                <button
                  disabled={hasAnswered}
                  className={`${styles.btnOpt} ${
                    opt === answer ? styles.correct : ""
                  }`}
                  onClick={() =>
                    dispatch({ type: "hasAnswered", payLoad: index })
                  }
                >
                  {opt}
                </button>
              </div>
            ))}
          </div>
          <Button
            answer={answer}
            index={index}
            dispatch={dispatch}
            numQuestions={numQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
