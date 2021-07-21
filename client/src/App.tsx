import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import Profile from "./containers/ProfileList";
// import Character from "./containers/Character";

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
          <div>hello</div>
        </Route>
      </Switch>
    </Router>
  );
}
