import { tailspin } from "ldrs";
import styles from "./Loader.module.css";
const Loader = () => {
  tailspin.register();

  return (
    <div className={styles.loading}>
      <l-tailspin size="50" stroke="5" speed="0.9" color="black"></l-tailspin>
      <p className={styles.loadingText}>
        Loading may you na chill abeg!!! 🙏🏾 ......
      </p>
    </div>
  );
};

export default Loader;
