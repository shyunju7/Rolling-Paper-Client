import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "./Route/Intro/index";
import Main from "./Route/Main/index";
const RouterComponent = () => {
  <Router>
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/paper" exact component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>;
};

export default RouterComponent;
