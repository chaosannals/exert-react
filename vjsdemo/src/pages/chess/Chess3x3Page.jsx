import PropTypes from "prop-types";
import styles from "./Chess3x3Page.module.scss";
import { useState } from "react";
import { range } from "lodash";

function Square({ type, onTypeChange }) {
  return (
    <div
      className={styles.square}
      onClick={() => {
        onTypeChange();
      }}
    >
      {type == 0 && " "}
      {type == 1 && "×"}
      {type == 2 && "〇"}
    </div>
  );
}

Square.propTypes = {
  type: PropTypes.number,
  onTypeChange: PropTypes.func,
};

const COLUMN_COUNT = 10;
const ROW_COUNT = 10;
const WIN_COUNT = 4; // 自身没算 所以是 5

function checkDirect(board, x, y, next) {
  const index = y * COLUMN_COUNT + x;
  const type = board[index];
  let count = 0;
  let nx = x;
  let ny = y;
  for (;;) {
    const np = next(nx, ny);
    nx = np.nx;
    ny = np.ny;
    // console.log('next', type, nx, ny);
    if (nx >= COLUMN_COUNT || ny >= ROW_COUNT || nx < 0 || ny < 0) {
      break;
    }
    const ni = ny * COLUMN_COUNT + nx;
    const nt = board[ni];
    if (nt == type) {
      count++;
    } else {
      break;
    }
  }
  console.log('check', count);
  return count;
}

function checkWin(board, x, y) {
  // 西到东
  // 东到西
  let w2e = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 + 1, ny: y1 }));
  let e2w = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 - 1, ny: y1 }));
  if (w2e + e2w >= WIN_COUNT) {
    return true;
  }
  // 南到北
  // 北到南
  let s2n = checkDirect(board, x, y, (x1, y1) => ({ nx: x1, ny: y1 - 1 }));
  let n2s = checkDirect(board, x, y, (x1, y1) => ({ nx: x1, ny: y1 + 1 }));
  if ((s2n + n2s) >= WIN_COUNT) {
    return true;
  }

  // 西北到东南
  // 东南到西北
  let wn2es = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 + 1, ny: y1 + 1 }));
  let es2wn = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 - 1, ny: y1 - 1 }));
  if (wn2es + es2wn >= WIN_COUNT) {
    return true;
  }

  // 西南到东北
  // 东北到西南
  let ws2en = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 + 1, ny: y1 - 1 }));
  let en2ws = checkDirect(board, x, y, (x1, y1) => ({ nx: x1 - 1, ny: y1 + 1 }));
  if (ws2en + en2ws >= WIN_COUNT) {
    return true;
  }
  return false;
}

export default function Chess3x3Page() {
  const [winner, setWinner] = useState(0);
  const [turn, setTurn] = useState(1);
  const [types, setTypes] = useState(Array(COLUMN_COUNT * ROW_COUNT).fill(0));

  const rows = range(0, ROW_COUNT).map((row) => {
    const columns = range(0, COLUMN_COUNT).map((column) => {
      const index = row * COLUMN_COUNT + column;
      return (
        <Square
          key={index}
          type={types[index]}
          onTypeChange={() => {
            const type=types[index]
            if (type == 0) {
              const newTypes = [...types];
              newTypes[index] = turn;
              setTypes(newTypes);
              setTurn(turn == 1 ? 2 : 1);
              if (checkWin(newTypes, column, row)) {
                setWinner(turn);
              }
            }
          }}
        />
      );
    });
    return (
      <div key={row} className={styles.row}>
        {columns}
      </div>
    );
  });

  return (
    <div className={styles.page}>
      {winner > 0 && <div>Winner: {winner}</div>}
      <div className={styles.board}>{rows}</div>
    </div>
  );
}
