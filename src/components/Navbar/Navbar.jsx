/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
function Navbar({ icon, title }) {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.sty}>
          <img src={icon} alt="nav" />
        </div>

        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Navbar;
