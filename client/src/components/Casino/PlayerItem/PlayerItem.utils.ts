import { useEffect, useState } from "react";

import { Player } from "../../../shared";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const loggedInPlayer = localStorage.getItem("player");

    if (loggedInPlayer) setPlayer(JSON.parse(loggedInPlayer));
  }, []);

  return player;
};
