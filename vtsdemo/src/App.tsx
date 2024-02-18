import { useRoutes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { lazy } from "react";

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
