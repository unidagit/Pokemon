const BASE_PATH = "https://pokeapi.co/api/v2";

export function getSearchPokemon(pokemonName: string) {
  return fetch(`${BASE_PATH}/pokemon/${pokemonName}`).then((response) =>
    response.json()
  );
}
