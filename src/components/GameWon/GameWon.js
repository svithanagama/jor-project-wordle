import React from "react";
import Banner from "../Banner";

function GameWon({ numOfTries }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfTries === 1 ? "1 guess" : `${numOfTries} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default GameWon;
