import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Intro from "./Route/Intro";
import Main from "./Route/Main";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/paper/:linkcode" exact component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
