import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Intro from "./Route/Intro";
import Main from "./Route/Main";
import Result from "./Route/Result";
import Share from "./Route/Share";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/share/:linkcode" exact component={Share} />
          <Route path="/result/:linkcode" exact component={Result} />
          <Route path="/paper/:linkcode" exact component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
