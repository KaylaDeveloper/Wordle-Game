import React from "react";

function Banner({ value, answer, guessResult }) {
  if (value === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {guessResult.length === 1
              ? "1 guess"
              : `${guessResult.length} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
