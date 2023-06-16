import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import NotFoundPages from "./components/pages/NotFoundPages";
import Footer from "./components/templates/Footer";
import SearchPage from "./components/pages/SearchPage";
import DetailPage from "./components/pages/DetailPage";
import './App.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/detail/:query" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
