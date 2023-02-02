import React from "react";

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(guesses) {
  const statusObj = {};

  guesses.forEach((guess) => {
    guess.forEach(({letter, status}) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}
function Keyboard({guesses}) {  
  const letterStatus = getStatusByLetter(guesses);

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => { 
            // should be its own component
            const className = letterStatus[letter] ? `key ${letterStatus[letter]}` : "key";
            return (<div key={letter} className={className}>{letter}</div>)
          })}
        </div>
      ))}
      
    </div>
  )
}

export default Keyboard;
