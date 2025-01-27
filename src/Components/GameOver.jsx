import Text from "./Text";
import Button from "./Button";
import "../styles/gameover.css";

function GameOver({ gameState, resetGame }) {
  return (
    <div className="gameover-container">
      {gameState === "win" ? (
        <Text text="You win!" />
      ) : (
        <Text text="Game Over!" />
      )}
      <Button text="Restart" onClick={resetGame} />
    </div>
  );
}

export default GameOver;
