import Button from "./Button";
import Text from "./Text";
import "../Styles/difficultyselect.css";

function DifficultySelect({ handleDifficultySelection }) {
  return (
    <div className="difficulty-select-container">
      <Text text="Difficulty" />
      <div className="difficulty-buttons-container">
        <Button text="Easy" value="easy" onClick={handleDifficultySelection} />
        <Button
          text="Normal"
          value="normal"
          onClick={handleDifficultySelection}
        />
        <Button text="Hard" value="hard" onClick={handleDifficultySelection} />
      </div>
    </div>
  );
}

export default DifficultySelect;
