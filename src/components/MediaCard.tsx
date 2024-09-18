import { mediaTypes } from "../types/mediaTypes";
import styles from "./styles/mediacard.module.css";

function MediaCard({ mediaProps }: { mediaProps: mediaTypes }) {
  return (
    <div className={styles.mediaCard}>
      <a href={mediaProps.link} target="_blank">
        <img src={mediaProps.logo} />
      </a>
    </div>
  );
}

export default MediaCard;
