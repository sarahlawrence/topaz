import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import Profile from "./containers/Profile";
import Character from "./containers/Character";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/profile/:id">
          <Profile />
        </Route>

        <Route path="/character/:id">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}
