import React from "react";

// Exercise 1 Acceptance Criteria
/*
 * Log guess to console on submit
 * 5 letters only allowed
 * All uppercase
 */

function GuessForm({ guessWord }) {
  // Input state (only needed in this form, no need to lift!)
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        guessWord(guess);
        setGuess("");
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        required
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
