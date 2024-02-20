/* eslint-disable react/prop-types */
import styles from "./Progress.module.css";
function Progress({ index, numQuestions, answer }) {
  return (
    <div>
      <progress
        className={styles.progress}
        value={index + Number(answer != null)}
        max={numQuestions}
      />
    </div>
  );
}

export default Progress;
