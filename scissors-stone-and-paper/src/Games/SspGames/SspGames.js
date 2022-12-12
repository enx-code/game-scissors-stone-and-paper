import { useState, useEffect } from "react";
import "./SspGames.css";

export default function SspGames({ player }) {
  const [score, setScore] = useState(0);
  const [appScore, setAppScore] = useState(0);
  const [userSelection, setMyselection] = useState("Rock");
  const [appChoice, setAppChoice] = useState("Rock");
  const [result, setResult] = useState(null);

  const num = Math.floor(Math.random() * 3);
  useEffect(() => {
    let result = "";
    if (num === 0) {
      result = "Scissors";
    } else if (num === 1) {
      result = "Rock";
    } else {
      result = "Paper";
    }
    setAppChoice(result);
  }, [userSelection]);

  //   console.log("Choices App", appChoice, "MyChoice", userSelection);

  let outCome = "";
  const startGame = () => {
    if (appChoice === userSelection) {
      outCome = "Draw";
    }
    if (userSelection === "Rock") {
      if (appChoice === "Paper") {
        outCome = "App, won!";
      } else {
        outCome = "Congratulations, you Won!";
      }
    }

    if (userSelection === "Scissors") {
      if (appChoice === "Rock") {
        outCome = "App, won!";
      } else {
        outCome = "Congratulations, you Won!";
      }
    }

    if (userSelection === "Paper") {
      if (appChoice === "Scissors") {
        outCome = "App, won!";
      } else {
        outCome = "Congratulations, you Won!";
      }
    }
    console.log("Who Won!", outCome, userSelection, appChoice);
    // setResult(outCome);
    if (outCome === "Congratulations, you Won!") {
        return setScore(score + 1)
    }
  };
  startGame();
  return (
    <div>
      <h1>Hello Player {player}!</h1>
      <h2>App Choice, {appChoice}.</h2>
      <p>{outCome}</p>
      <p>{score}-{appScore}</p>
      <h2>
        {player}'s choice {userSelection}!
      </h2>
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
    </div>
  );
}
