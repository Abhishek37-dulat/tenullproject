import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favme from "./Favme";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approve" element={<Favme />} />
      </Routes>
    </div>
  );
}

export default App;
