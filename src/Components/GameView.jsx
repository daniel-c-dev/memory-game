import { useState } from "react";
import ScoreBoard from "./Scoreboard";
import Cards from "./Cards";
import GameOver from "./GameOver";
import "../styles/gameview.css";

function GameView() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [activePokemon, setActivePokemon] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleScoreChange = () => {
    setScore((score) => {
      const newScore = score + 1;
      handleHighScoreChange(newScore);
      return newScore;
    });
  };

  const handleHighScoreChange = (currScore) => {
    setHighScore((highScore) => Math.max(currScore, highScore));
  };

  const resetGame = () => {
    setScore(0);
    setActivePokemon([]);
    setGameOver(false);
  };

  return (
    <div className="gameview">
      <ScoreBoard score={score} highScore={highScore} />
      {!gameOver ? (
        <Cards
          key={gameOver}
          activePokemon={activePokemon}
          setActivePokemon={setActivePokemon}
          handleScoreChange={handleScoreChange}
          setGameOver={setGameOver}
        />
      ) : (
        <GameOver resetGame={resetGame} />
      )}
    </div>
  );
}

export default GameView;
