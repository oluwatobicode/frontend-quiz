/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Progress from "../Progress/Progress";
import styles from "./Quiz.module.css";
function Quiz({
  question,
  answer,
  index,
  dispatch,
  numQuestions,
  icon,
  title,
}) {
  console.log(question.options);
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
              <div key={index}>
                <button className={`${styles.btnOpt}`}>{opt}</button>
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
