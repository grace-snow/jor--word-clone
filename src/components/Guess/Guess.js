import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className='guess'>
      {range(5).map((letterIndex) => (
        <span className='cell' key={letterIndex}>
          {word ? word[letterIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
