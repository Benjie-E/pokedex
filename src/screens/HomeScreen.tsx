import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";
import { getPokemonAsync, PokemonType, typeOptions } from "../api/pokedex-api";
import CharacterCard, { generationNumbers } from "../components/PokemonCard";
//import HouseCount from "../components/HouseCount";

const HomeScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [generation, setGeneration] = useState<generationNumbers>("I");
  const [typeSearch, setTypeSearch] = useState<typeOptions | "">("");
  const { data } = useQuery(["pokemon"], () => getPokemonAsync(), {
    select: (pokemon) =>
      pokemon.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      ),
    staleTime: Infinity,
  });
  return (
    <div className="App">
      <h1>Pokédex App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <select
        name="generation"
        onChange={(e) => setGeneration(e.target.value as generationNumbers)}
      >
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
      </select>
      
      <div className="mx-4 space-y-4 flex flex-col">
        {data?.map((pokemon) => (
          <CharacterCard
            key={`${pokemon.id}`}
            pokemon={pokemon}
            generation={generation}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
