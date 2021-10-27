import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "../src/pages/Intro";
import Main from "../src/pages/Main";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/user/" exact component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
