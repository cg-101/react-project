import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

// SPA :: SINGLE PAGE APPLICATION
function App() {
  // UI PART
  return (
    <Router>
      {/* Navigations */}
      <Link to="/p1">
        <button className="btn btn-primary">Home</button>
      </Link>

      <Link to="/p2">
        <button className="btn btn-primary">Product Explore</button>
      </Link>

      <Link to="/p3">
        <button className="btn btn-primary">Display Cart</button>
      </Link>

      <Switch>
        <Route path="/p1" component={Page1} />
        <Route path="/p2" component={Page2} />
        <Route path="/p3" component={Page3} />
        <Route path="/" component={Page1} />
      </Switch>
    </Router>
  );
}

export default App;
