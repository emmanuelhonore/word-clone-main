import React from "react";

function Banner({status, answer, numOfGuesses, handleRestart}) {
  let content = "";
  let className = 'banner';

  if (status === "won") {
    className = "happy banner";
    content = <p>
      <strong>Congratulations!</strong> Got it in
      {' '}
      <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
    </p>;
  } else if (status === "lost") {
    className = "sad banner";
    content =   <p>Sorry, the correct answer is{' '}<strong>{answer}</strong>.</p>;
  }

  return (
    <div className={className}>
        {content}
        <button onClick={handleRestart}>restart</button>
    </div>
  );
}

export default Banner;
