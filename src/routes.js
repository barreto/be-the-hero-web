import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";

export default function Routes(params) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="./" exact component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}
