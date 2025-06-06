import { useState } from "react";
import MainMenu from "./Components/MainMenu";
import GameView from "./Components/GameView";
import "../src/Styles/reset.css";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState("");

  return difficulty === "" ? (
    <MainMenu setDifficulty={setDifficulty} />
  ) : (
    <GameView difficulty={difficulty} setDifficulty={setDifficulty} />
  );
}

export default App;
