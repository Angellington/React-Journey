// CSS
import "./App.css";
// React
import { useState } from "react";
// data
import { wordlist } from "./data/words";
// Components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordlist);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

    const pickWordCategory = () => {
        // Pick Random Category
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * categories.length)];

        // Pink a random word
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        return { word, category }
    }


  // StartSecretWord Game
  const startGame = () => {
    // pick word and pick category
    const {word, category } = pickWordCategory();
    // create array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase());


    // fill states
    setPickedWord(word)
    setPickedCategory(category);
    setLetters(letters)




    setGameStage(stages[1].name)  
  }

  // Processamento do input da letra
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].game)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
