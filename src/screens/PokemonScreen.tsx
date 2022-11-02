import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getEvolutionAsync, getSinglePokemonAsync } from "../api/pokedex-api";
import PokemonCard from "../components/PokemonCard";

const PokemonScreen: React.FC = () => {
  const { id } = useParams();
  const pokemon = useQuery([id], () => getSinglePokemonAsync(id??0),);
  const evolutionName = useQuery([id+"e"], () => getEvolutionAsync(id??0))
  const { data } = useQuery([id+"e1"], () => getSinglePokemonAsync(evolutionName.data?.["evolves_from_species"].name??0),);
console.log(data)
  return (<div><PokemonCard pokemon={pokemon.data} generation="VI" />
  <div>Evolves From</div>
  <PokemonCard pokemon={data} generation="VI" />
</div>);
};

export default PokemonScreen;
