import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import GameWon from "../GameWon";
import GameLost from "../GameLost";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");

  function onGuess(newGuess) {
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    } else if (newGuess.value.toUpperCase() === answer) {
      setGameStatus("won");
    }
  }

  return (
    <>
      <GuessList guesses={guesses} correctAnswer={answer} />
      {gameStatus === "won" && <GameWon numOfTries={guesses.length} />}
      {gameStatus === "lost" && <GameLost correctAnswer={answer} />}
      <GuessInput
        addNewGuess={onGuess}
        gameCompleted={gameStatus !== "running"}
      />
    </>
  );
}

export default Game;
