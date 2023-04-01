import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className='guess'>
      {/* {word.split("").map((letter, index) => (
        <span className='cell' key={index}>
          {letter}
        </span>
      ))} */}
      {range(5).map((letterIndex) => (
        <span className='cell' key={letterIndex}>
          {word ? word[letterIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
