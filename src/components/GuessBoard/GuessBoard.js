import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessBoard({ guessResult }) {
  const cell = (rowNum) =>
    range(5).map((num) => {
      const wordArray = guessResult[rowNum];
      const status = wordArray ? wordArray[num].status : undefined;
      return (
        <span key={num} className={`cell ${status}`}>
          {wordArray ? wordArray[num].letter : undefined}
        </span>
      );
    });

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowNum) => (
        <p key={rowNum} className="guess">
          {cell(rowNum)}
        </p>
      ))}
    </div>
  );
}

export default GuessBoard;
