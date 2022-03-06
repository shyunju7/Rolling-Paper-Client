import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "./Route/Intro/index";
import Main from "./Route/Main/index";
import Result from "./Route/Result/index";
const RouterComponent = () => {
  <Router>
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/paper" exact component={Main} />
      <Route path="/result" exact component={Result} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>;
};

export default RouterComponent;
