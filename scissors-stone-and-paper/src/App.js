import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Games from "./Games/Games";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [player, setPlayer] = useState("");
  console.log("player", player);
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Game Center for {player}</p>
        <label>
          Enter User Nickname:
          <input
            type="text"
            placeholder="Enter Nickname ..."
            onChange={(e) => setPlayer(e.target.value)}
          />
        </label>
        <button
          className="App-link"
          onClick={() => {
            navigate("/games");
          }}
        >
          Let me in!
        </button>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games" element={<Games player={player} />} />
      </Routes>
    </div>
  );
}

export default App;
