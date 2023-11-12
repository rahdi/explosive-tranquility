import React from "react";

import { useGames } from "./Games.utils";
import { Loader } from "../../../shared";
import { GameItem } from "./GameItem";

const Games = () => {
  const games = useGames();

  if (!games) return <Loader />;

  return (
    <div className="ui relaxed divided game items links">
      {games.map((game, index) => (
        <GameItem key={index} game={game} />
      ))}
    </div>
  );
};

export default Games;
