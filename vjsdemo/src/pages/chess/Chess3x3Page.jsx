import PropTypes from "prop-types";
import styles from "./Chess3x3Page.module.scss";

function Square({ type, onTypeChange }) {
  return (
    <div
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

export default function Chess3x3Page() {
  return (
    <div className={styles.page}>
      <Square type={1} onTypeChange={() => {}} />
    </div>
  );
}
