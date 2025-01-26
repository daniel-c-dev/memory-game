import Text from "./Text";
import Button from "./Button";
import "../styles/gameover.css";

function GameOver({ resetGame }) {
  return (
    <div className="gameover-container">
      <Text text="Game Over!" />
      <Button text="Restart" onClick={resetGame} />
    </div>
  );
}

export default GameOver;
