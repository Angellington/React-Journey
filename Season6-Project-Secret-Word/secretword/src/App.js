// CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";
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
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const clearLetterState = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      // reset all stages
      clearLetterState();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // checkWin Condition

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore + 100);

      // restart game
      startGame();
    }
  }, [guessedLetters]);

  const pickWordCategory = () => {
    // Pick Random Category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Pink a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  };

  // StartSecretWord Game
  const startGame = useCallback(() => {
    const { word, category } = pickWordCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    clearLetterState();

    setGameStage(stages[1].name);
  }, [pickWordCategory]);

  // Processamento do input da letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    )
      return;

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((prev) => [...prev, normalizedLetter]);
      setGuesses((prev) => prev - 1);
    }
  };

  // Reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
