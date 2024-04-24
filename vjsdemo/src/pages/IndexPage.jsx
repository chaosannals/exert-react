import { useState } from "react";
import { Link } from 'react-router-dom';
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./IndexPage.module.scss";
import classNames from "classnames";
import { routes } from '../routes';
import { counterStore, incremented, decremented } from "../stores/counter";
import { timerStore, timerNow } from "../stores/timer";

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const links = routes.map(r => {
    return (
      <Link key={r.path} to={r.path}>{r.path}</Link>
    )
  });

  // 这种用法有点另类，是 Rx 和 vuex 的混种。。
  // 很像 Compose 的 Rx LiveData Flow 这类东西，但是又用了 vuex 那种啰嗦的申明。
  counterStore.subscribe(() => {
    const state = counterStore.getState();
    setCount(state.value);
    console.log('on page', state);
  });

  // 无法直接取得值，所以要用这种很绕的方式去使用。
  const [now, setNow] = useState(0);
  timerStore.subscribe(() => {
    setNow(timerStore.getState().value);
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
        <button onClick={() => counterStore.dispatch(incremented()) }>
          store inc
        </button>
        <button onClick={() => counterStore.dispatch(decremented())}>
          store dec
        </button>
        <button onClick={() => timerNow() }>
          {/* 无法直接使用 store 取得值 */}
          {/* timer now: {timerStore.getState().value} */}
          {now}
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
