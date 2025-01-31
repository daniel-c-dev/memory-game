import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { getPokemonData, shuffleArray } from "./getPokemon";
import "../Styles/cards.css";

function Cards({
  activePokemon,
  setActivePokemon,
  handleScoreChange,
  setGameState,
  difficulty,
}) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(`Loading value on component mount: ${loading}`);

  let pokemonCount = 0;
  let pokemonLoaded = false;

  switch (difficulty) {
    case "easy":
      pokemonCount = 5;
      break;
    case "normal":
      pokemonCount = 10;
      break;
    case "hard":
      pokemonCount = 15;
  }

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        if (!pokemonLoaded) {
          pokemonLoaded = true;
          const pokemonInfo = await getPokemonData(pokemonCount);
          setPokemon(pokemonInfo);
          handleShuffle(pokemonInfo);
          setActivePokemon(
            pokemonInfo.map((pokemon) => {
              return pokemon.name;
            })
          );
        }
      } catch (error) {
        console.log("Error fetching Pokemon: ", error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    loadPokemon();
  }, [setActivePokemon, pokemonCount]);

  const handlePokemonClick = (pokemonName) => {
    console.log(activePokemon.includes(pokemonName));
    if (activePokemon.includes(pokemonName)) {
      handleScoreChange();
      setActivePokemon((prevActivePokemon) =>
        prevActivePokemon.filter((name) => name !== pokemonName)
      );
      handleShuffle(pokemon);
      console.log(`Active pokemon: ${JSON.stringify(activePokemon)}`);
      if (activePokemon.length - 1 === 0) {
        console.log(`Game over! Player wins!`);
        setGameState("win");
      }
    } else {
      console.log(`Game over! Pokemon already clicked: ${pokemonName}`);
      setGameState("loss");
    }
  };

  const handleShuffle = (pokemonArray) => {
    const shuffledPokemon = [...pokemonArray];
    shuffleArray(shuffledPokemon);
    setPokemon(shuffledPokemon);
  };

  return (
    <div className="cards-container">
      {loading ? (
        <Loading />
      ) : (
        pokemon.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            handlePokemonClick={handlePokemonClick}
          />
        ))
      )}
    </div>
  );
}

export default Cards;
