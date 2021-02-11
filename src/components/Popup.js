import React ,{useEffect} from 'react'
import {CheckWin} from '../helper/helper'
const Popup = ({selectedWord,correctLetters,wrongLetters,setPlayable,playable,PlayAgain}) => {
    let finalMessageRevealWord='';
    let finalMessage='';
   if(CheckWin(selectedWord,correctLetters,wrongLetters)==='win'){
           finalMessage='Congratulations! You Won'
                playable=false;
        
    }
    else if(CheckWin(selectedWord,correctLetters,wrongLetters)==='lost'){
        finalMessage='Sorry! You lost'
        playable=false;
        finalMessageRevealWord=`The word was ${selectedWord}`;
    }
     useEffect(()=>setPlayable(playable))
    return (
        <div className='popup-container' style={finalMessage!==''?{display:'flex'}:{}}>
        <div className='popup'>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={PlayAgain}>Play Again</button>
        </div>
            
        </div>
    )
}

export default Popup
 