import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { routes } from "./routes";

console.log("routes", routes);

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

  return <>{pages}</>;
}

export default App;
