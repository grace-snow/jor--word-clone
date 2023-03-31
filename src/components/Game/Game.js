import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Main state
  const [guesses, setGuesses] = React.useState("");

  function guessWord(word) {
    const newGuess = {
      guess: word,
      id: crypto.randomUUID(),
    };

    console.log(newGuess);

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    console.log(nextGuesses);
  }

  return (
    <>
      <GuessForm guessWord={guessWord} />
    </>
  );
}

export default Game;
