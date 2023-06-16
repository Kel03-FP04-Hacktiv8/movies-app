import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import NotFoundPages from "./components/pages/NotFoundPages";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          {/* <Route path="/search/:query" element={<Search />} /> */}
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
