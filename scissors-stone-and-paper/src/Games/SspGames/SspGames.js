import { useState, useEffect } from "react";
import "./SspGames.css";

export default function SspGames({ player }) {
  const [score, setScore] = useState(0);
  const [appScore, setAppScore] = useState(0);
  const [userSelection, setMyselection] = useState("Rock");
  const [appChoice, setAppChoice] = useState("Rock");
  const [result, setResult] = useState(null);

  const num = Math.floor(Math.random() * 9);
  useEffect(() => {
    let result = "";
    if (num >= 0 && num <= 2) {
      result = "Scissors";
    } else if (num >= 3 && num <= 5) {
      result = "Rock";
    } else {
      result = "Paper";
    }
    setAppChoice(result);
  }, [userSelection]);

  console.log("Choices App", appChoice, "MyChoice", userSelection);

  const startGame = (appChoice, userSelection) => {
    let result = "";
    if (appChoice === userSelection) {
      result = "Draw";
    }
    if (userSelection === "Rock") {
      if (appChoice === "Paper") {
        result = "App, won!";
      }
    }
    setResult(result);
  };
  console.log("app won", result)
  return (
    <div>
      <h1>Hello Player {player}!</h1>
      <h2>App Choice, {appChoice}.</h2>
      <h2></h2>
      <p>{score}</p>
      <button
        onClick={() => {
          setMyselection("Scissors");
        }}
      >
        Scissors
      </button>
      <button
        onClick={() => {
          setMyselection("Rock");
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          setMyselection("Paper");
        }}
      >
        Paper
      </button>
      <h2>
        {player}'s choice {userSelection}!
      </h2>
    </div>
  );
}
