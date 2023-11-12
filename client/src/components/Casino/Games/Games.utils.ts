import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Game } from "./Games.types";

export const useGames = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!games) {
      (async () => {
        try {
          const response = await fetch("http://localhost:3001/games", {
            method: "get",
          });
          const data: Game[] = await response.json();

          setGames(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const categoryId = searchParams.get("categoryId");
  const search = searchParams.get("search");

  if (categoryId)
    return games?.filter((game) =>
      game.categoryIds.includes(Number(categoryId))
    );
  if (search)
    return games?.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );

  return games;
};
