import { useEffect, useState } from "react";
import { Game } from "./GamesList.types";

export const useGames = () => {
  const [games, setGames] = useState<Game[] | null>(null);

  // Probably not a good idea to use useEffect here. Double fetching
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
