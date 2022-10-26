import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonType } from "../api/pokedex-api";

export const pokemonApi = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonType[], void>({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetPokemonListQuery } = pokemonApi;

export default pokemonApi.reducer;