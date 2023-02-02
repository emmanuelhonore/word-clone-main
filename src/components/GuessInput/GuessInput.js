import React from "react";

function GuessInput({handleSubmitedGuess,isEnabled}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleTentativeGuess(event) {
    event.preventDefault(); 
    
    if(tentativeGuess.length !== 5) {
      window.alert('please provide a 5 letter word');
      return;
    }

    handleSubmitedGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" 
      onSubmit={event => {
          handleTentativeGuess(event);
        }
      }>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" 
              required
              maxLength={5} 
              minLength={5} 
              value={tentativeGuess}
              onChange={event => {
                const nextGuess = event.target.value.toUpperCase();
                setTentativeGuess(nextGuess);
              }}
              disabled={isEnabled !== 'Running'}
      />
    </form>
  );
}

export default GuessInput;
