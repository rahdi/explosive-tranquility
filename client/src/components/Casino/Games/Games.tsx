import React from "react";

import GameItem from "./GameItem";
import { useGames } from "./Games.utils";
import { Loader } from "../../../shared";

type Props = {};

const Games = (props: Props) => {
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
