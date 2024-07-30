import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Play.jsx";
import Train from "./pages/Train.jsx";
import MyBots from "./pages/MyBots.jsx";
function App() {
  return (
    <div className="font-[Silkscreen]">
      <Router>
        <Navbar className="mt-0 pt-0" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/train" element={<Train />} />
          <Route exact path="/myBots" element={<MyBots />} />
          <Route exact path="/play_the_dev" element={<Play />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
