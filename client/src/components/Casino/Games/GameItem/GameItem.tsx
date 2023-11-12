import React from "react";

import { Game } from "../Games.types";
import { useOpenGame } from "./GameItem.utils";

type Props = {
  game: Game;
};

const GameItem = ({ game: { name, description, icon, code } }: Props) => {
  const openGame = useOpenGame()

  return (
    <div className="game item">
      <div className="ui small image">
        <img src={icon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description">{description}</div>
        <div className="extra">
          <div className="play ui right floated secondary button inverted" onClick={()=>openGame(code)}>
            Play
            <i className="right chevron icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
