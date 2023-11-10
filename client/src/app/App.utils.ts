import React, { useEffect, useState } from "react";

export const useHandleLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const player = localStorage.getItem("player");

    if (player) setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("player");
  };

  return { isLoggedIn, handleLogin, handleLogout };
};
