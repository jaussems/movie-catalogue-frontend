import styles from "../../styles/Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.align_middle}>
      <div className={styles.spin}></div>
    </div>
  );
};

export default Spinner;
