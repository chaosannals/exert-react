import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { routes } from "./routes";

console.log("routes", routes);

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function App() {
  const pages = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "*",
      Component: lazy(() => import("./pages/ErrorPage")),
    },
    ...routes,
  ]);

  // Suspense 是必要的，不然惰性加载会有问题。
  return <Suspense fallback={<Loading/>}>{pages}</Suspense>;
}

export default App;
