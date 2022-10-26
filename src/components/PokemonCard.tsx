import { useEffect } from "react";
import { PokemonType } from "../api/pokedex-api";
import Ability from "./Ability";
import TypeObject from "./Type";

type PokemonCardProps = {
  pokemon: PokemonType;
  generation: generationNumbers;
};
export type generationNumbers = "I" | "II" | "III" | "IV" | "V" | "VI";
const getSprite = (generation: generationNumbers, pokemon: PokemonType) => {
  const version = pokemon.sprites.versions;
  switch (generation) {
    case "I":
      return version["generation-i"]["red-blue"].front_default;
    case "II":
      return version["generation-ii"].gold.front_default;
    case "III":
      return version["generation-iii"]["ruby-sapphire"].front_default;
    case "IV":
      return version["generation-iv"]["diamond-pearl"].front_default;
    case "V":
      return version["generation-v"]["black-white"].front_default;
    case "VI":
      return version["generation-vi"]["x-y"].front_default;
  }
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, generation }) => {
  useEffect(() => {
    getSprite(generation, pokemon);
  }, [generation]);

  return (
    <div
      className="bg-purple-600 h-30 rounded-lg
    border-2 border-green-800 flex flex-row"
    >
      <img
        className="h-20 m-1"
        src={getSprite(generation, pokemon)}
        alt={pokemon.name}
      />
      <div>
        <div className="rounded bg-black id-box">{pokemon.id}</div>
        <h3 className="name-font">{pokemon.name.toUpperCase()} </h3>
        <div>Weight: {pokemon.weight}kg</div>
        <div>Height: {pokemon.height}m </div>
      </div>

      <div className="flex flex-col justify-end">
        {
          <span>
            {pokemon.types?.map((t) => (
              <TypeObject
                key={`${t.type.name}-${pokemon.id}`}
                type={t.type.name}
              />
            ))}
          </span>
        }
      </div>
      <span>
        {pokemon.abilities?.map((a) => (
          <Ability
            key={`${a.ability.name}-${pokemon.id}`}
            url={a.ability.url}
            ability={a.ability.name}
          />
        ))}
      </span>
      
    </div>
  );
};

export default PokemonCard;
