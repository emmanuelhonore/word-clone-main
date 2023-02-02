import React from "react";

import { range } from "../../utils";

function Guess({guess}) {
  return  (
      <p className="guess">
        {range(5).map(( index ) => {
          // should be its own component ?
            return (
              <span key={index} 
                    className={guess ? `cell ${guess[index].status}` : "cell"}>
                      {guess ? guess[index].letter : undefined}
              </span>
            )
          })
        }
      </p>
    );
}

export default Guess;
