const BASE_PATH = "https://pokeapi.co/api/v2";
const LIMIT = 100;
const OFFSET = 0;

export function getSearchPokemon(pokemonName: string) {
  return fetch(`${BASE_PATH}/pokemon/${pokemonName}`).then((response) =>
    response.json()
  );
}

export function getPokemon() {
  return fetch(`${BASE_PATH}/pokemon?limit=${LIMIT}&offset=${OFFSET}`).then(
    (response) => response.json()
  );
}

export function getPokemonImg(name: string) {
  return fetch(`${BASE_PATH}/pokemon/${name}`).then((response) =>
    response.json()
  );
}
