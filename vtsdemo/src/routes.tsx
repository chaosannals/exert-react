import { kebabCase } from "lodash";
import { lazy } from "react";

function loadPages() {
  const modules = import.meta.glob("./pages/*/*.jsx");
  return Object.keys(modules).map((fileName) => {
    const match = fileName.match(/.+?pages\/(.+?)Page.jsx/);
    const path =
      "/" +
      match![1]
        .split("/")
        .map((i) => kebabCase(i))
        .join("/");
    return {
      path: path,
      Component: lazy(
        modules[fileName] as unknown as () => Promise<{
          default: React.ComponentType<unknown>;
        }>
      ),
    };
  });
}

export const routes = loadPages();
