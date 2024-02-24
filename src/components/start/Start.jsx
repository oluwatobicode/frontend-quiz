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
              <div className={styles.html}>
                <img src="assets/images/icon-html.svg" alt="html icon" />
              </div>
              <p>Html</p>
            </button>
          </Link>
          <Link to="/css" className={styles.link}>
            <button className={styles.btn}>
              <div className={styles.css}>
                <img src="assets/images/icon-css.svg" alt="CSS icon" />
              </div>
              <p>CSS</p>
            </button>
          </Link>
          <Link to="/javascript" className={styles.link}>
            <button className={styles.btn}>
              <div className={styles.js}>
                <img src="assets/images/icon-js.svg" alt="JavaScript icon" />
              </div>
              <p>JavaScript</p>
            </button>
          </Link>
          <Link to="/accessibility" className={styles.link}>
            <button className={styles.btn}>
              <div className={styles.accessibility}>
                <img
                  src="assets/images/icon-accessibility.svg"
                  alt="accessibility icon"
                />
              </div>
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
