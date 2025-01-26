const API_URL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * Fetch pokemon data from pokeapi.
 * @param {number} pokemonCount - Number of pokemon to get
 * @return {Array<Object>} - Array of pokemon {name, image}
 */
const getPokemonData = async (pokemonCount) => {
  const data = await fetchAllPokemon(`${API_URL}?limit=${pokemonCount}`);
  const pokemonInfo = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return {
        id: crypto.randomUUID(),
        name: pokemon.name,
        image: pokemonData.sprites.front_default,
      };
    })
  );
  return pokemonInfo;
};

const fetchAllPokemon = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

const shufflePokemon = (pokemonArray) => {
  for (let i = pokemonArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
  }
};

export { getPokemonData, shufflePokemon };
