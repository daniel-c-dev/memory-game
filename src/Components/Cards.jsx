import { useState, useEffect, act } from "react";
import Card from "./Card";
import { getPokemonData, shufflePokemon } from "./getPokemon";
import "../styles/cards.css";

function Cards({
  activePokemon,
  setActivePokemon,
  handleScoreChange,
  setGameState,
}) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const pokemonInfo = await getPokemonData(6);
        setPokemon(pokemonInfo);
        handleShuffle(pokemonInfo);
        setActivePokemon(
          pokemonInfo.map((pokemon) => {
            return pokemon.name;
          })
        );
      } catch (error) {
        console.log("Error fetching Pokemon: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemon();
  }, [setActivePokemon]);

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
    setLoading(true);
    const shuffledPokemon = [...pokemonArray];
    shufflePokemon(shuffledPokemon);
    setPokemon(shuffledPokemon);
    setLoading(false);
  };

  return (
    <div className="cards-container">
      {loading ? (
        <p>Loading...</p>
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
