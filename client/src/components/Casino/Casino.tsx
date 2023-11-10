import React from "react";

import { PlayerItem } from "./PlayerItem";
import { GamesList } from "./GamesList";

type Props = { handleLogout: VoidFunction };

const Casino = ({ handleLogout }: Props) => {
  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">
            <PlayerItem />
          </div>
          <div
            className="logout ui left floated secondary button inverted"
            onClick={handleLogout}
          >
            <i className="left chevron icon"></i>Log Out
          </div>
        </div>
        <div className="four wide column">
          <div className="search ui small icon input">
            <input type="text" placeholder="Search Game" />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>

          <GamesList />
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>

          <div className="ui selection animated list category items">
            {/* <!-- category item template --> */}
            <div className="category item">
              <div className="content">
                <div className="header"></div>
              </div>
            </div>
            {/* <!-- end category item template --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
