import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

  export const useOpenGame = () => {
    const navigate = useNavigate();

    return useCallback((code:string) => {
      navigate(`/game?gameId=${code}`);
    },[])
  }