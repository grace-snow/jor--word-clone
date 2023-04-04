import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNum) => (
        <Guess key={guessNum} word={guesses[guessNum]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
