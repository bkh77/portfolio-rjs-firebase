import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMain from "./home/HomeMain";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeMain} />
      </Switch>
    </Router>
  );
}

export default Routing;
