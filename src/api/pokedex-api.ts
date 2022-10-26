export type typeOptions =
  | "grass"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dark"
  | "dragon"
  | "steel"
  | "fairy";
export type AbilityType = {
  effect_entries: [
    { effect: string; short_effect: string; language: { name: string } }
  ];
};
export type PokemonType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  forms: [{ name: string; url: string }];

  sprites: {
    versions: {
      "generation-i": {
        "red-blue": {
          front_default: string;
        };
      };
      "generation-ii": {
        gold: {
          front_default: string;
        };
      };
      "generation-iii": {
        "ruby-sapphire": {
          front_default: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          front_default: string;
        };
      };
      "generation-v": {
        "black-white": {
          front_default: string;
        };
      };
      "generation-vi": {
        "x-y": {
          front_default: string;
        };
      };
    };
  };
  types: [
    {
      type: {
        name: typeOptions;
      };
    }
  ];
};

const baseURI = "https://pokeapi.co/api/v2/";

export const getPokemonAsync = async () => {
  const pokemonRange = Array.from(Array(151).keys()).map((x) => x + 1);
  const urls = pokemonRange.map((n) => `${baseURI}pokemon/${n}`);
  const requests = urls.map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const json = responses.map((response) => response.json());
  const data = await Promise.all(json);

  return data as PokemonType[];
};

export const getAbilityAsync = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();

  return json as AbilityType;
};
