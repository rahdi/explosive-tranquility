import { useEffect, useState } from "react";

import { Category } from "./Categories.types";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    if (!categories) {
      (async () => {
        try {
          const response = await fetch("http://localhost:3001/categories", {
            method: "get",
          });
          const data: Category[] = await response.json();

          setCategories(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return categories;
};
