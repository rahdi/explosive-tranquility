import React from "react";
import { useNavigate } from "react-router-dom";

import { useLaunchGame } from "./Ingame.utils";
import { Loader } from "../../shared";

const Ingame = () => {
  const navigate = useNavigate();
  const loading = useLaunchGame();

  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <div
            className="ui right floated secondary button inverted"
            onClick={() => navigate("/")}
          >
            <i className="left chevron icon"></i>Back
          </div>
        </div>
        <div className="ten wide column">
          {loading && <Loader />}
          <div id="game-launch"></div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
};

export default Ingame;
