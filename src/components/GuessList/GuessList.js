import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessList({ guesses, correctAnswer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((number) => {
        let word;
        let key = number;
        if (typeof guesses[number] === "object") {
          word = guesses[number].value;
          key = guesses[number].id;
        }
        return <Guess correctAnswer={correctAnswer} word={word} key={key} />;
      })}
    </div>
  );
}

export default GuessList;
