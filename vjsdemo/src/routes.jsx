import { kebabCase } from "lodash";
import { lazy } from "react";

function loadPages() {
  const modules = import.meta.glob("./pages/*/*.jsx");
  return Object.keys(modules).map((fileName) => {
    const match = fileName.match(/.+?pages\/(.+?)Page.jsx/);
    const path =
      "/" +
      match[1]
        .split("/")
        .map((i) => kebabCase(i))
        .join("/");
    return {
      path: path,
      Component: lazy(modules[fileName]), // TODO 首次切换路由的时候不会加载。。。
      // Component: lazy(() => import(`./pages/${match[1]}Page.jsx`)), // 不可用，动态字符串没办法被编译器识别替换。
      // Component: lazy(() => import('./pages/chess/Chess3x3Page.jsx')),
    };
  });
}

// 异步惰性加载很奇怪，首次切换路由不会加载。只能同步加载。
function loadPagesSync() {
  const modules = import.meta.glob("./pages/*/*.jsx", { eager: true });
  return Object.keys(modules).map((fileName) => {
    const match = fileName.match(/.+?pages\/(.+?)Page.jsx/);
    const path =
      "/" +
      match[1]
        .split("/")
        .map((i) => kebabCase(i))
        .join("/");
    return {
      path: path,
      Component: modules[fileName].default,
    };
  });
}

// export const routes = loadPages();
export const routes = loadPagesSync();
