import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const style = status ? `cell ${status}` : "cell";
  return <span className={style}>{letter}</span>;
}

function Guess({ word, correctAnswer }) {
  const result = checkGuess(word, correctAnswer);
  return (
    <p className="guess">
      {range(0, 5).map((number) => (
        <Cell
          letter={result ? result[number].letter : undefined}
          status={result ? result[number].status : undefined}
          key={number}
        />
      ))}
    </p>
  );
}

export default Guess;
