import { incremented, decremented } from "../../stores/counter";
import { rememberFullname, store } from "../../stores";
import { useState } from "react";
import { stateFoo } from "../../stores/single";

export default function StorePage() {
  const state = store.getState();
  const [counter, setCounter] = useState(state.counter.value);
  const [firstName, lastName, setFirstName, setLastName] = rememberFullname();
  const [foo, setFoo] = stateFoo();

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
      <div>
        <input
          type="number"
          value={foo.age}
          onChange={(e) =>
            setFoo({ name: foo.name, age: Number(e.target.value) })
          }
        />
        <input
          value={foo.name}
          onChange={(e) => {
            // 如果 foo 的 name 没设置初始化只，这一句报错。
            setFoo({ name: e.target.value, age: foo.age });
          }}
        />
      </div>
    </div>
  );
}
