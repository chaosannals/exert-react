import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "*",
      Component: lazy(() => import("./pages/ErrorPage")),
    },
  ]);

  return <>{routes}</>;
}

export default App;
