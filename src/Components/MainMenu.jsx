import DifficultySelect from "./DifficultySelect";
import "../styles/mainmenu.css";

function MainMenu({ setDifficulty }) {
  const handleDifficultySelection = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="main-menu">
      <DifficultySelect handleDifficultySelection={handleDifficultySelection} />
    </div>
  );
}

export default MainMenu;
