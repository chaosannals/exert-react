// 官网的向下兼容示例，被标记为废弃的旧写法
// 官方更推荐使用合并后的 @redux/toolkit 开发。
import { createStore } from "redux";

function timerReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "timer/now":
      return { value: new Date().getTime() };
    default:
      return state;
  }
}

export const timerStore = createStore(timerReducer);

timerStore.subscribe(() => {
  console.log("timer", timerStore.getState());
});

export const timerNow = () => timerStore.dispatch({ type: "timer/now" });
