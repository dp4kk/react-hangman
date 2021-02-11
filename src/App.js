import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from './components/Notification'
import {ShowNotificaton as show} from './helper/helper'
const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "Algorithm",
  "Bootstrap",
  "Backend",
  "Code",
  "Deployment",
  " Frontend",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification]=useState(false)
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //show notification
           show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          }
          else{
            //show notification
           show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown',handleKeydown)

    return(()=>window.removeEventListener('keydown',handleKeydown))
  },[correctLetters,wrongLetters,playable]);

  const PlayAgain=()=>{
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])
    const random = Math.floor(Math.random() * words.length);
    selectedWord=words[random]
  }
  return (
    <React.Fragment>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} setPlayable={setPlayable} playable={playable} PlayAgain={PlayAgain}/>
      <Notification showNotification={showNotification} />
    </React.Fragment>
  );
}

export default App;
