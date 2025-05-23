import { useState } from "react";
import ScoreBoard from "./Scoreboard";
import Cards from "./Cards";
import GameOver from "./GameOver";
import Button from "./Button";
import "../Styles/gameview.css";
import pokeballIcon from "/public/pokeball-icon.png";

function GameView({ difficulty, setDifficulty }) {
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

  const returnToHome = () => {
    setDifficulty("");
  };

  return (
    <div className="gameview">
      {gameState !== "win" && gameState !== "loss" ? (
        <>
          <ScoreBoard score={score} highScore={highScore} />
          <Button
            className="home-button"
            image={pokeballIcon}
            onClick={returnToHome}
          />
          <Cards
            key={gameState}
            activePokemon={activePokemon}
            setActivePokemon={setActivePokemon}
            handleScoreChange={handleScoreChange}
            setGameState={setGameState}
            difficulty={difficulty}
          />
        </>
      ) : (
        <GameOver score={score} gameState={gameState} resetGame={resetGame} />
      )}
    </div>
  );
}

export default GameView;
