import styles from "./styles/homepageme.module.css";

function HomepageMe() {
  return (
    <div className={styles["homepage-me"]}>
      <div className={styles["my-photo"]}>
        <img src="image 7.jpg" alt="My Photo" />
      </div>
      <div className={styles["my-info"]}>
        <h1 className={styles["my-name"]}>Hiago Augusto</h1>
        <p className={styles["my-title"]}>Web Developer</p>
      </div>
    </div>
  );
}

export default HomepageMe;
