import { useRoutes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <IndexPage/>,
    },
  ]);

  return (
    <>
      {routes}
    </>
  )
}

export default App
