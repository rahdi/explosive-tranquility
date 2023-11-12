import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useLaunchGame = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const typedWindow = window as Window & typeof globalThis & { comeon: any };
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const gameId = searchParams.get("gameId");
    if (!gameId) return;
    if (!typedWindow["comeon"]) return;

    if (!timeout.current) {
      timeout.current = setTimeout(() => {
        setLoading(false);
        typedWindow.comeon.game.launch(gameId);
      }, 500);
    }
  }, [searchParams]);

  useEffect(
    () => () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    },
    []
  );

  return loading;
};
