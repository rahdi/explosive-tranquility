import React, { useState } from "react";

import { Casino, Ingame, LoginForm, Logo } from "../components";
import { useHandleLoginState } from "./App.utils";

type Props = {};

const App = (props: Props) => {
  const { isLoggedIn, handleLogin, handleLogout } = useHandleLoginState();

  return (
    <>
      <Logo />
      <div className="main container">
        {!isLoggedIn && <LoginForm handleLogin={handleLogin} />}
        {isLoggedIn && <Casino handleLogout={handleLogout} />}
        <Ingame />
      </div>
    </>
  );
};

export default App;
