import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function LetterCell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);
  // console.log({ result });

  return (
    <p className='guess'>
      {range(5).map((letterIndex) => (
        <LetterCell
          key={letterIndex}
          letter={result ? result[letterIndex].letter : undefined}
          status={result ? result[letterIndex].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
