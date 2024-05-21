import { incremented, decremented } from "../../stores/counter";
import { rememberFullname, store } from "../../stores";
import { useState } from "react";
import { setFullname } from "../../stores/some";

export default function StorePage() {
  const state = store.getState();
  const [counter, setCounter] = useState(state.counter.value);
  const [firstName, lastName, setFirstName, setLastName] = rememberFullname();

  store.subscribe(() => {
    const state = store.getState();
    setCounter(state.counter.value);
  });

  return (
    <div>
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
      <div>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
