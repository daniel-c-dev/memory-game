import Text from "./Text";
import Button from "./Button";
import "../styles/gameover.css";

function GameOver({ score, gameState, resetGame }) {
  const scoreMessage = `Your score was: ${score}`;

  return (
    <div className="gameover-container">
      {gameState === "win" ? (
        <Text text="You win!" />
      ) : (
        <>
          <Text text="Game Over!" />
          <Text text={scoreMessage} />
        </>
      )}
      <Button text="Restart" onClick={resetGame} />
    </div>
  );
}

export default GameOver;
