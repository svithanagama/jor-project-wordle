import React from "react";

function GuessInput({ addNewGuess, gameCompleted }) {
  const [guess, setGuess] = React.useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const newGuessItem = {
      value: "" + guess.toUpperCase(),
      id: crypto.randomUUID(),
    };
    addNewGuess(newGuessItem);
    setGuess("");
  }

  return (
    <form
      onSubmit={(event) => onFormSubmit(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="[A-Za-z]{5}"
        maxLength={5}
        title="Should be a 5 letter word"
        id="guess-input"
        type="text"
        disabled={gameCompleted}
        value={guess}
        onChange={(event) => setGuess(("" + event.target.value).toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
