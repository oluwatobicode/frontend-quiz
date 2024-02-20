import { Link } from "react-router-dom";
import styles from "./Start.module.css";
const Start = () => {
  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <div className={styles.heading}>
          <h1>
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>
        <div className={styles.subjects}>
          <Link to="/html" className={styles.link}>
            <button className={styles.btn}>
              <img src="assets/images/icon-html.svg" alt="html icon" />
              <p>Html</p>
            </button>
          </Link>
          <Link to="/css" className={styles.link}>
            <button className={styles.btn}>
              <img src="assets/images/icon-css.svg" alt="CSS icon" />
              <p>CSS</p>
            </button>
          </Link>
          <Link to="/javascript" className={styles.link}>
            <button className={styles.btn}>
              <img src="assets/images/icon-js.svg" alt="JavaScript icon" />
              <p>JavaScript</p>
            </button>
          </Link>
          <Link to="/accessibility" className={styles.link}>
            <button className={styles.btn}>
              <img
                src="assets/images/icon-accessibility.svg"
                alt="accessibility icon"
              />
              <p>Accessibility</p>
            </button>
          </Link>
        </div>
        {/* <h1>CodingNinja</h1> */}
      </div>
    </div>
  );
};

export default Start;
