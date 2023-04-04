import React from "react";

import Banner from "../Banner/Banner";

function GameWonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status='happy' action={handleRestart} actionText='Try again'>
      <p>
        <strong>Congratulations!</strong> You got it right in{" "}
        <strong>{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default GameWonBanner;
