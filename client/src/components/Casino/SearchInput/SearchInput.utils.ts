import { ChangeEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [, setSearchParams] = useSearchParams();

  return useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchParams({ search: value });
  }, []);
};
