import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSinglePokemonAsync } from "../api/pokedex-api";
import PokemonCard from "../components/PokemonCard";

const PokemonScreen: React.FC = () => {
  const { id } = useParams();
  const { data } = useQuery([id], () => getSinglePokemonAsync(id??1));

  return <PokemonCard pokemon={data} generation="I" />;
};

export default PokemonScreen;
