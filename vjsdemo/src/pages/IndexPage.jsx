import { useState } from "react";
import { Link } from 'react-router-dom';
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./IndexPage.module.scss";
import classNames from "classnames";
import { routes } from '../routes';

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const links = routes.map(r => {
    return (
      <Link key={r.path} to={r.path}>{r.path}</Link>
    )
  });

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={classNames(styles.logo, styles.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>{Object.keys(styles).join(",")}</p>
      <div className={styles.links}>
        <Link to="error-test">无效链接</Link>
        {links}
      </div>
    </div>
  );
}
