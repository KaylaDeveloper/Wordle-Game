import React from "react";

function Guess({ handleSubmitGuess }) {
  const [word, setWord] = React.useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setWord("");
          handleSubmitGuess(word);
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={word}
          onChange={(e) => {
            const uppercaseWord = e.target.value.toUpperCase();
            setWord(uppercaseWord);
          }}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
        />
      </form>
    </>
  );
}

export default Guess;
