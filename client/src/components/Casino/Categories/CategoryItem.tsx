import React from "react";

import { Category } from "./Categories.types";

type Props = {
  category: Category;
};

const CategoryItem = ({ category: { id, name } }: Props) => {
  return (
    <div className="category item">
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
