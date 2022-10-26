import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AbilityType } from "../api/pokedex-api";

export const abilityApi = createApi({
  reducerPath: "ability",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAbility: builder.query<AbilityType,void>({
      query: () => "ability",
    }),
  }),
});

export const { useGetAbilityQuery } = abilityApi;

export default abilityApi.reducer;