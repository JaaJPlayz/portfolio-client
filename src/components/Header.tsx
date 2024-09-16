import styles from "./styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <a href="/">Portfolio</a>
      </section>
      <section className={styles.links}>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/edu">Edu</a>
        <a href="/tech">Tech</a>
      </section>
    </header>
  );
}

export default Header;
