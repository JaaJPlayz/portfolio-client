import HomepageMe from "../components/HomepageMe";
import HomepageTech from "../components/HomepageTech";

import styles from "./styles/homepage.module.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className={styles["flex-container-row"]}>
        <HomepageMe />
        <HomepageTech />
      </div>
    </div>
  );
}

export default Homepage;
