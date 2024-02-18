//必须空引入一次 react 不然无法使用原始元素 例如 div
// 此处由于引入的其他组件已经引入过了，所以可以不用。
// 如果没有关联的组件不引入 就会报错。
// import React from 'react';
import { useRoutes } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  // useRoutes 居然必须再函数体内调用。
  const routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
