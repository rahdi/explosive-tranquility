import React from "react";
import { Casino, Ingame, LoginForm, Logo } from "../components";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Logo />
      <div className="main container">
        <LoginForm />
        <Casino />
        <Ingame />
      </div>
    </>
  );
};

export default App;
