import styles from "./styles/homepagetech.module.css";

function HomepageTech() {
  return (
    <div className={styles["homepage-tech"]}>
      <div className={styles["tech-grid"]}>
        <section className={styles["tech-row"]}>
          <a href="https://www.python.org/" target="_blank">
            <div className={styles["tech-item"]}>
              <img src="pythonLogo.png" alt="python-logo" />
            </div>
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <div className={styles["tech-item"]}>
              <img src="reactLogo.svg" alt="react-logo" />
            </div>
          </a>
          <a href="https://nodejs.org/en/" target="_blank">
            <div className={styles["tech-item"]}>
              <img src="nodejsLogo.png" alt="node-logo" />
            </div>
          </a>
        </section>
        <section className={styles["tech-row"]}>
          <a href="https://www.djangoproject.com/" target="_blank">
            <div className={styles["tech-item"]}>
              <img
                src="djangoLogo.png"
                alt="django-logo"
                className={styles["no-border"]}
                style={{ backgroundColor: "#092e20" }}
              />
            </div>
          </a>
          <a href="https://www.mysql.com/" target="_blank">
            <div className={styles["tech-item"]}>
              <img
                src="mysqlLogo.png"
                alt="mysql-logo"
                className={styles["no-border"]}
                style={{ backgroundColor: "#428db2" }}
              />
            </div>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <div className={styles["tech-item"]}>
              <img
                src="typescriptLogo.png"
                alt="typescript-logo"
                className={styles["no-border"]}
                style={{ backgroundColor: "#2d79c7" }}
              />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}

export default HomepageTech;
