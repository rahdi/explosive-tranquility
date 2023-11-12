import React from "react";

import { usePlayer } from "./PlayerItem.utils";
import { Loader } from "../../../shared";

const PlayerItem = () => {
  const player = usePlayer();

  if (!player) return <Loader />;

  const { avatar, event, name } = player;

  return (
    <div className="player item">
      <img className="ui avatar image" src={avatar} alt="avatar" />

      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description event">{event}</div>
      </div>
    </div>
  );
};

export default PlayerItem;
