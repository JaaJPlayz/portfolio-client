import styles from "./styles/homepagetech.module.css";

function HomepageTech() {
  return (
    <div className={styles["homepage-tech"]}>
      <div className={styles["tech-grid"]}>
        <section className={styles["tech-row"]}>
          <div className={styles["tech-item"]}>
            <img src="djangoLogo.png" alt="django-logo" />
          </div>
          <div className={styles["tech-item"]}>
            <img src="reactLogo.svg" alt="react-logo" />
          </div>
          <div className={styles["tech-item"]}>
            <img src="nodejsLogo.png" alt="node-logo" />
          </div>
        </section>
        <section className={styles["tech-row"]}>
          <div className={styles["tech-item"]}>
            <img src="pythonLogo.png" alt="python-logo" />
          </div>
          <div className={styles["tech-item"]}>
            <img src="mysqlLogo.png" alt="mysql-logo" />
          </div>
          <div className={styles["tech-item"]}>
            <img src="typescriptLogo.png" alt="typescript-logo" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomepageTech;
