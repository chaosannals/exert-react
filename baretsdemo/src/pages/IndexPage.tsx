import logo from "../logo.svg";
import styles from "./IndexPage.module.scss";

export default function IndexPage() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
