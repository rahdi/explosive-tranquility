import React from "react";

import { useSearch } from "./SearchInput.utils";

type Props = {};

const SearchInput = (props: Props) => {
  const onChange = useSearch();

  return (
    <div className="search ui small icon input">
      <input type="text" placeholder="Search Game" onChange={onChange} />
      <i className="search icon"></i>
    </div>
  );
};

export default SearchInput;
