import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import rock from "./img/rock.jpg";
import paper from "./img/paper.jpg";
import scissors from "./img/scissors.jpg";

function App() {
  const [gameState, setGameState] = useState("");
  const [computerChoice, setComputerChoice] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(0);

  function getChoiceString(choiceInt) {
    if (choiceInt === 1) return "rock";
    if (choiceInt === 2) return "paper";
    if (choiceInt === 3) return "scissors";
  }

  useLayoutEffect(() => {
    if (gameState !== "") {
      setComputerChoice(Math.floor(Math.random() * 3 + 1));
      if (playerChoice === computerChoice) {
        setGameState("draw");
      } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
      ) {
        setGameState("win");
      } else if (
        (playerChoice === 3 && computerChoice === 1) ||
        (playerChoice === 1 && computerChoice === 2) ||
        (playerChoice === 2 && computerChoice === 3)
      ) {
        setGameState("loss");
      }
    }
  }, [playerChoice, computerChoice, gameState]);

  function playChoice(choice) {
    setGameState("active");
    setPlayerChoice(choice);
  }

  if (gameState === "") {
    return (
      <div className="App">
        <h1>Rock, Paper, Scissors</h1>
        <div className="container">
          <button className="img-btn" onClick={() => playChoice(1)}>
            <img src={rock} alt="rock" />
          </button>
          <button className="img-btn" onClick={() => playChoice(2)}>
            <img src={paper} alt="paper" />
          </button>
          <button className="img-btn" onClick={() => playChoice(3)}>
            <img src={scissors} alt="scissors" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Your choice: {getChoiceString(playerChoice)}</h1>
      <h1>Computer choice: {getChoiceString(computerChoice)}</h1>
      <h2>
        {gameState === "win" ? "You won!" : null}
        {gameState === "loss" ? "You lost." : null}
        {gameState === "draw" ? "It's a draw." : null}
      </h2>
      <button onClick={() => setGameState("")}>Play Again</button>
    </div>
  );
}

export default App;
