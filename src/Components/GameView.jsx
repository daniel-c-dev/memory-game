import { useState } from "react";
import ScoreBoard from "./Scoreboard";
import Cards from "./Cards";
import GameOver from "./GameOver";
import "../styles/gameview.css";

function GameView() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [activePokemon, setActivePokemon] = useState([]);
  const [gameState, setGameState] = useState("playing");

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
    setGameState("playing");
  };

  return (
    <div className="gameview">
      <ScoreBoard score={score} highScore={highScore} />
      {gameState === "playing" ? (
        <Cards
          key={gameState}
          activePokemon={activePokemon}
          setActivePokemon={setActivePokemon}
          handleScoreChange={handleScoreChange}
          setGameState={setGameState}
        />
      ) : (
        <GameOver gameState={gameState} resetGame={resetGame} />
      )}
    </div>
  );
}

export default GameView;
