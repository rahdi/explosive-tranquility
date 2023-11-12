import { useEffect, useState } from "react";

import { Game } from "./Games.types";

export const useGames = () => {
  const [games, setGames] = useState<Game[] | null>(null);

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

  return games;
};
