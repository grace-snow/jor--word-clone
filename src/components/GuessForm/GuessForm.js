import React from "react";

// Exercise 1 Acceptance Criteria
/*
 * Log guess to console on submit
 * 5 letters only allowed
 * All uppercase
 */

// function GuessForm({ guessWord }) {
function GuessForm({ handleSubmitGuess }) {
  // Input state (only needed in this form, no need to lift!)
  // const [guess, setGuess] = React.useState("");
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // console.log({ guess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        required
        value={tentativeGuess}
        onChange={(event) => {
          // setGuess(event.target.value.toUpperCase())
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessForm;
