import { useStore } from "react-redux";
import { incremented, decremented } from "../../stores/counter";
import { store } from "../../stores";
import { useState } from "react";

export default function StorePage() {
  const [counter, setCounter] = useState(store.getState().counter.value);

  store.subscribe(() => {
    setCounter(store.getState().counter.value);
  });

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(incremented());
        }}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          store.dispatch(decremented());
        }}
      >
        -
      </button>
    </div>
  );
}
