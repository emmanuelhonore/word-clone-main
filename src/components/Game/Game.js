import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.
let answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status , setStatus] = React.useState('Running');
  
  function handleRestart() {
    answer = sample(WORDS);
    console.info({ answer });
    setGuesses([]);
    setStatus('Running');
  }

  function handleSubmitedGuess(label) {
    const newGuess = checkGuess(label, answer);
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);

    // check game status
    if (label === answer) {
      setStatus('won');
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }  

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitedGuess={handleSubmitedGuess} isEnabled={status} />
      <Keyboard guesses={guesses} />
      {
        status !== 'Running' && <Banner status={status} answer={answer} numOfGuesses={guesses.length} handleRestart={handleRestart}/>
      }
    </>
  );
}

export default Game;
