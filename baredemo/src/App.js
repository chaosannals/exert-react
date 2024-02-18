import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Chess3x3 from "./pages/Chess3x3";
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      {/* 也可以用  useRoutes 生成，配合 lazy 实现懒加载。 */}
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/chess3x3" element={<Chess3x3/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
