import { PureComponent, memo } from "react";

// 纯组件，已经不推荐，因为它是一个类定义。
// React 推荐使用 函数代替类，组件类被函数代替，纯组件也推荐用纯函数代替。
// 纯组件就是没有状态的组件，类似 Flutter 的 StatelessWidget
// 一般的组件带状态，类似 Flutter 的 StatefulWidget
// react 都已经函数式，不再使用类定义组件，而是使用函数定义组件。
export class PureComponentDemo extends PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    return <h1>Hello, PureComponent {this.props.name}!</h1>;
  }
}

// 使用纯函数定义组件
// memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。
export const PureComponentFuncDemo = memo(function PureComponentFuncDemo({
  // eslint-disable-next-line react/prop-types
  name,
}) {
  return <h1>This a PureComponentFunc: {name}</h1>;
});
