import { useState, useEffect } from "react";
import Score from "./Score";
import HighScore from "./HighScore";
import "../Styles/scoreboard.css";

function ScoreBoard({ score, highScore }) {
  // increment score when clicking a new pokemon
  // reset score on game over
  // update high score on game over if score > high score

  return (
    <div className="scoreboard-container">
      <Score score={score} />
      <HighScore highScore={highScore} />
    </div>
  );
}

export default ScoreBoard;
