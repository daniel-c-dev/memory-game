const API_URL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * Fetch pokemon data from pokeapi.
 * @param {number} pokemonCount - Number of pokemon to get
 * @return {Array<Object>} - Array of pokemon {id, name, image}
 */
const getPokemonData = async (pokemonCount) => {
  let randomNumArray = generateRandomNumbers(800);
  let pokemonArray = [pokemonCount];

  for (let i = 0; i < pokemonCount; i++) {
    const pokemonUrlToFetch = `${API_URL}${randomNumArray.pop()}`;
    const pokemonResponse = await fetch(`${pokemonUrlToFetch}`);
    console.log(`Fetched pokemon from: ${pokemonUrlToFetch}`);
    pokemonArray[i] = pokemonResponse;
  }
  const pokemonInfo = await Promise.all(
    pokemonArray.map(async (pokemon) => {
      const pokemonData = await pokemon.json();
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
      };
    })
  );
  return pokemonInfo;
};

const generateRandomNumbers = (count) => {
  let array = new Array(count);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }
  shuffleArray(array);
  return array;
};

const shuffleArray = (pokemonArray) => {
  for (let i = pokemonArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
  }
};

export { getPokemonData, shuffleArray };
