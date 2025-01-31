import { useState, useEffect } from "react";
import Text from "./Text";
import Image from "./Image";
import "../Styles/card.css";

function Card({ pokemon, handlePokemonClick }) {
  const handleClick = () => {
    console.log(`Pokemon clicked: ${pokemon.name}`);
    handlePokemonClick(pokemon.name);
  };
  return (
    <div className="card" onClick={handleClick}>
      <Image imageSrc={pokemon.image} />
      <Text text={pokemon.name}></Text>
    </div>
  );
}

export default Card;
