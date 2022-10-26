import { useCallback, useEffect, useState } from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import { getAbilityAsync } from "../api/pokedex-api";
import { useQuery } from "@tanstack/react-query";

type AbilityProps = {
  ability: string;
  url: string;
};


const Ability: React.FC<AbilityProps> = ({ ability, url }) => {

  const { data } = useQuery([url], () => getAbilityAsync(url), {
    select: (ability) =>
      ability.effect_entries.find((effect) => effect.language.name == "en"),
      staleTime: Infinity,
  });

  return (
    <Tooltip key="test" className="bg-red-600" content={data?.short_effect}>
      <Button variant="outlined" className="h-auto">
        {ability}
      </Button>
    </Tooltip>
  );
  
};

export default Ability;
