import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { LoginForm, Logo } from "../components";
import { useHandleLoginState } from "./App.utils";
import AppRoutes from "./AppRoutes";

const App = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useHandleLoginState();

  return (
    <BrowserRouter>
      <Logo />
      <div className="main container">
        {!isLoggedIn && <LoginForm handleLogin={handleLogin} />}
        {isLoggedIn && <AppRoutes handleLogout={handleLogout} />}
      </div>
    </BrowserRouter>
  );
};

export default App;
