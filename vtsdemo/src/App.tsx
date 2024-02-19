import { useRoutes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { Suspense, lazy } from "react";
import { routes } from "./routes";

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

  console.log('pages', pages);

  return <Suspense fallback={<Loading />}>{pages}</Suspense>;
}

export default App;
