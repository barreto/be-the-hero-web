import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutesPaths from "./contants/routesPath";
import Logon from "./pages/Logon";
import Register from "./pages/Register";

export default function Routes(params) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutesPaths.Logon} exact component={Logon} />
        <Route path={RoutesPaths.Register} exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
