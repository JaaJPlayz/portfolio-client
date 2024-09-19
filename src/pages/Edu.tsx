import styles from "./styles/edu.module.css";
import MediaCard from "../components/MediaCard";

function Edu() {
  const trybeProps = {
    logo: "trybeLogo.png",
    link: "https://www.betrybe.com/",
  };

  return (
    <div className={styles["edu"]}>
      <MediaCard mediaProps={trybeProps} />
    </div>
  );
}

export default Edu;
