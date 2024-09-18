import styles from "./styles/contact.module.css";
import MediaCard from "../components/MediaCard";

function Contact() {
  const mediaPropsGithub = {
    logo: "githubLogo.png",
    link: "https://www.github.com/JaaJPlayz/",
  };

  const mediaPropsLinkedin = {
    logo: "linkedinLogo.png",
    link: "https://www.linkedin.com/in/hiago-augusto-a56656186/",
  };

  const mediaPropsPhone = {
    logo: "phoneLogo.png",
    link: "https://wa.me/+5531982816786",
  };

  const mediaPropsEmail = {
    logo: "gmailLogo.png",
    link: "mailto:hiagoaugustofcunha@gmail.com",
  };

  return (
    <div className={styles["contact"]}>
      <div className={styles["media-row"]}>
        <MediaCard mediaProps={mediaPropsGithub} />
        <MediaCard mediaProps={mediaPropsLinkedin} />
      </div>

      <div className={styles["media-row"]}>
        <MediaCard mediaProps={mediaPropsPhone} />
        <MediaCard mediaProps={mediaPropsEmail} />
      </div>
    </div>
  );
}

export default Contact;
