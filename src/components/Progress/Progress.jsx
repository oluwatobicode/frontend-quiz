/* eslint-disable react/prop-types */
import styles from "./Progress.module.css";
function Progress({ index, numQuestions, answer }) {
  return (
    <div>
      <progress
        className={styles.progressBar}
        value={index + Number(answer != null)}
        max={numQuestions}
      />
    </div>
  );
}

export default Progress;
