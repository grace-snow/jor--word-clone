import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Main state
  const [guesses, setGuesses] = React.useState([]);

  // function guessWord(word) {
  //   const nextGuess = {
  //     guess: word,
  //     id: crypto.randomUUID(),
  //   };
  //   // console.log(nextGuess);
  //   const nextGuesses = [...guesses, nextGuess];
  //   setGuesses(nextGuesses);
  //   // console.log(nextGuesses);
  // }

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      {/* <GuessForm guessWord={guessWord}  /> */}
      <GuessForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
