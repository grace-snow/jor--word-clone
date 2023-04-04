import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import GameLostBanner from "../GameLostBanner/GameLostBanner";
import GameWonBanner from "../GameWonBanner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);

function Game() {
  // Main state
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      <div aria-live='polite'>
        {gameStatus === "won" && (
          <GameWonBanner handleRestart={handleRestart} numOfGuesses={guesses.length} />
        )}
        {gameStatus === "lost" && <GameLostBanner handleRestart={handleRestart} answer={answer} />}
      </div>
    </>
  );
}

export default Game;
