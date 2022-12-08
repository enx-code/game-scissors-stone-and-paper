import logo from "../logo.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function Register({ player, setPlayer }) {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Game Center for {player}</p>
      <label>
        Enter User Nickname:
        <input
          className="placeholder"
          type="text"
          placeholder="Enter Nickname ..."
          required
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
  );
}
