import React from "react";
import { useRoutes } from "react-router-dom";

import { Casino, Ingame } from "../components";

type Props = {
    handleLogout: VoidFunction
}

const routes = (handleLogout: VoidFunction) => useRoutes([
  {
    path: "/",
    element: <Casino handleLogout={handleLogout} />,
  },
  { path: "/game", element: <Ingame /> },
]);

const AppRoutes = ({handleLogout}: Props) => {
  return routes(handleLogout);
}

export default AppRoutes;