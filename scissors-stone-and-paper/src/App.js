import Register from "./Register/Register";
import "./App.css";
import { useState } from "react";
import Games from "./Games/Games";
import { Routes, Route } from "react-router-dom";
import MoreGames from "./MoreGames";
import SspGames from "./Games/SspGames/SspGames";

function App() {
  const [player, setPlayer] = useState("");

  return (
    <div className="App">
      
      <Routes>
        <Route
          path="/"
          element={<Register player={player} setPlayer={setPlayer} />}
        />
        <Route path="/games" element={<Games player={player} />} />
        <Route path="/more-games" element={<MoreGames/>} />
        <Route path="/scissors-stone-paper" element={<SspGames player={player} />} />
      </Routes>
    </div>
  );
}

export default App;
