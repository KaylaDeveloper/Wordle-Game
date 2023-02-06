import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessBoard from "../GuessBoard";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResult, setGuessResult] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleSubmitGuess = (guess) => {
    const checkedGuess = checkGuess(guess, answer);
    setGuessResult([...guessResult, checkedGuess]);
    setValue(guess);
  };
  return (
    <>
      <GuessBoard guessResult={guessResult} />
      {value === answer || guessResult.length === 6 ? (
        <Banner value={value} answer={answer} guessResult={guessResult} />
      ) : (
        <Guess handleSubmitGuess={handleSubmitGuess} />
      )}
    </>
  );
}

export default Game;
