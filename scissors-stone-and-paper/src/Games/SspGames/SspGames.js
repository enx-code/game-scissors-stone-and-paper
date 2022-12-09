import { useState } from "react";
import './SspGames.css'

export default function SspGames({ player }) {
  const [points, setPoints] = useState(0);
  const [mySelection, setMyselection] = useState("")


  const num = Math.floor(Math.random() * 9);
  let result = "";
  if (num >= 0 && num <= 2) {
    result = "scissors";
  } else if (num >= 3 && num <= 5) {
    result = "stone";
  } else {
    result = "paper";
  }
//   return result;
  function startGame(result, mySelection){
    if ("scissors" === result) {
        console.log("draw")
    } else (console.log("working"))
  }
 
  console.log("state", mySelection, result)
  

  return (
    <div>
      <h1>hello random Sign! {result}</h1>
      <button type="button" value={"scissors"} onClick={(e)=>{setMyselection(e.target.value)}}>Scissors</button>
      <button onClick={startGame()}>Stone</button>
      <button>Paper</button>
      <p>{points}</p>
    </div>
  );
}
