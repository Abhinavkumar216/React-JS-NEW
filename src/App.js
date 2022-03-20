import { Routes, Route } from "react-router-dom";
import Card from "./components/card/card";
import Detail from "./components/CardDetail/Detail";
import Modal from "./components/popup/Modal";
import Slider from "./components/Slider/Slider";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="detail" element={<Detail />} />
        {/* // <Route path="contact" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
