import { useState } from "react";

export default function SspGames({ player }) {
  const [points, setPoints] = useState();

  const appSelection = () => {
    const num = Math.floor(Math.random() * 9);
    let result = "";
    if (num >= 0 && num <= 2) {
      result = "scissors";
    } else if (num >= 3 && num <= 5) {
      result = "stone";
    } else {
      result = "paper";
    }
    return result;
  };
  return (
    <div>
      <h1>hello random number! {appSelection()}</h1>
    </div>
  );
}
