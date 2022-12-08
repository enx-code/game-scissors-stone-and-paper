import { Link, useNavigate } from "react-router-dom";
import "./Games.css";
import SspGames from "./SspGames/SspGames";

export default function Games({ player }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="h-tags">Welcome to Game Center!</h1>
      <h2 className="h-tags">Select Game to Play, {player}!</h2>
      <ul>
        <Link to="/scissors-stone-paper" className="link-more-games">
          <li>Scissors, Stone and Paper</li>
        </Link>
        <Link to="/more-games" className="link-more-games">
          <li>More Coming ...</li>
        </Link>
        <li onClick={() => navigate("/")}>Cancel</li>
      </ul>
    </div>
  );
}
