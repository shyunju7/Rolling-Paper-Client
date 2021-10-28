import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "./Route/Intro";
import Main from "./Route/Main";
import Result from "./Route/Result";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/paper/:linkcode/my" exact component={Result} />
          <Route path="/paper/:linkcode" exact component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
