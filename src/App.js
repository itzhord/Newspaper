import MainPage from "./hompage/MainPage";
import Business from "./pages/buisness";
import Fashion from "./pages/fashion";
import Food from "./pages/food";
import Health from "./pages/health";
import Science from "./pages/science";
import Sports from "./pages/sports";
import Technolgy from "./pages/technology";
import Travel from "./pages/travel";
import World from "./pages/world";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technology" element={<Technolgy />} />
          <Route path="/business" element={<Business />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/food" element={<Food />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
