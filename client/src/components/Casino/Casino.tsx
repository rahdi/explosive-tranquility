import React from "react";

import { PlayerItem } from "./PlayerItem";
import { Games } from "./Games";
import { Categories } from "./Categories";
import { SearchInput } from "./SearchInput";

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
          <SearchInput />
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>
          <Games />
        </div>

        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Casino;
