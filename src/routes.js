import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutesPaths from "./contants/routesPath";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

export default function Routes(params) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutesPaths.Logon} exact component={Logon} />
        <Route path={RoutesPaths.Register} component={Register} />
        <Route path={RoutesPaths.Profile} component={Profile} />
        <Route path={RoutesPaths.NewIncident} component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
