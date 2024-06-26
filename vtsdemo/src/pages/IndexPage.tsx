import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./IndexPage.module.scss";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { stateFoo } from "../stores/single";

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const [foo, setFoo] = stateFoo();

  return (
    <div className={styles.page}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>{Object.keys(styles).join(",")}</p>
      <div className={styles["link-list"]}>
        {routes.map((r) => {
          return (
            <Link key={r.path} to={r.path}>
              {r.path}
            </Link>
          );
        })}
      </div>
      <div>
        <input
          value={foo.name}
          onChange={(e) => setFoo({ name: e.target.value, age: foo.age })}
        />
      </div>
    </div>
  );
}
