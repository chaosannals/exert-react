import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './Index.module.scss';

export default function Index() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className={styles.links}>
            <NavLink to="">首页</NavLink>
            <NavLink to="/chess3x3">棋</NavLink>
          </div>
        </header>
    );
}