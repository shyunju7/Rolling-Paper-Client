import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "../pages/Intro";
import Main from "../pages/Main";
const RouterComponent = () => {
  <Router>
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/user" exact component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>;
};

export default RouterComponent;
