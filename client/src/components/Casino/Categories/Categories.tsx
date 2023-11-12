import React from "react";

import { Loader } from "../../../shared";
import { useCategories } from "./Categories.utils";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = useCategories();

  if (!categories) return <Loader />;

  return (
    <div className="ui selection animated list category items">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default Categories;
