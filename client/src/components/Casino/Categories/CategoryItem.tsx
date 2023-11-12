import React from "react";
import { useSearchParams } from "react-router-dom";

import { Category } from "./Categories.types";

type Props = {
  category: Category;
};

const CategoryItem = ({ category: { id, name } }: Props) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <div
      className="category item"
      onClick={() => setSearchParams({ categoryId: String(id) })}
    >
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
